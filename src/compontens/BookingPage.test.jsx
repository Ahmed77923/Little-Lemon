import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

beforeAll(() => {
  window.alert = jest.fn(); // mock alert
});

test("renders form and updates available times when date changes", () => {
  render(<BookingPage />);

  // تحقق من الحقول
  const dateInput = screen.getByLabelText(/التاريخ/i);
  const timeSelect = screen.getByLabelText(/الوقت/i);

  // قبل تغيير التاريخ، موجود خيار فارغ
  expect(timeSelect.options.length).toBeGreaterThan(1);

  // غير التاريخ
  fireEvent.change(dateInput, { target: { value: "2025-08-20" } });

  // بعد تغيير التاريخ، الخيارات تحدثت
  expect(timeSelect.options.length).toBe(6); // ["اختر الوقت" + 5 أوقات]
});

test("submits form with correct data and calls alert", () => {
  render(<BookingPage />);

  fireEvent.change(screen.getByLabelText(/الاسم/i), { target: { value: "أحمد" } });
  fireEvent.change(screen.getByLabelText(/التاريخ/i), { target: { value: "2025-08-20" } });
  fireEvent.change(screen.getByLabelText(/الوقت/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/عدد الضيوف/i), { target: { value: "4" } });

  fireEvent.click(screen.getByRole("button", { name: /احجز الآن/i }));

  expect(window.alert).toHaveBeenCalledWith(
    "تم حجز طاولة لـ أحمد (4 ضيف) في 2025-08-20 الساعة 18:00"
  );
});

