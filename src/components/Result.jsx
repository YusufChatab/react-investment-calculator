import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userResults }) {
  const resultsData = calculateInvestmentResults(userResults);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(resultsData);
  return (
    <main>
      <section>
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((data) => {
              const totalInterest =
                data.valueEndOfYear -
                data.annualInvestment * data.year -
                initialInvestment;
              const totalAmountInvested =
                data.valueEndOfYear - initialInvestment;
              return (
                <tr key={data.valueEndOfYear}>
                  <td>{data.year}</td>
                  <td>{formatter.format(data.valueEndOfYear)}</td>
                  <td>{formatter.format(data.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}
