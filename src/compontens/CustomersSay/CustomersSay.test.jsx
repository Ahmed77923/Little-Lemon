// src/components/CustomersSay.test.jsx
import { render, screen } from "@testing-library/react";
import CustomersSay from "./CustomersSay";
import testimonials from "./testimonials";

describe("CustomersSay Component", () => {
  test("يعرض جميع التقييمات من testimonials", () => {
    render(<CustomersSay />);

    testimonials.forEach((item) => {
      // نتحقق أن الاسم موجود
      const nameElement = screen.getByText(item.name);
      expect(nameElement).toBeInTheDocument();

      // نتحقق أن التعليق موجود
      const commentElement = screen.getByText(item.comment);
      expect(commentElement).toBeInTheDocument();

      // نتحقق أن عدد النجوم صحيح
      const starElements = screen.getAllByText("⭐");
      expect(starElements.length).toBeGreaterThanOrEqual(item.rating);
    });
  });
});

