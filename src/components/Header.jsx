import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

const logo = investmentCalculatorLogo;

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="investement-calculator logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
