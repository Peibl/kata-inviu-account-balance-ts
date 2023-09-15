import { AccountBalanceService } from "../../src/services/AccountBalanceService";

describe("Account service test", () => {
  it("shouldExecuteCashIn", () => {
    const service = new AccountBalanceService();
    service.executeCashIn(100, new Object());
    //Validar que el monto de 100$ se acreditó a la cuenta
    //expect(100).toEqual(99);
  });

  it("shouldExecuteCashOutAndFailBecauseOfInsufficientBalance", () => {
    const service = new AccountBalanceService();
    service.executeCashOut(100, new Object());

    //Validar que la extracción falló
    //expect(100).toEqual(99);
  });

  it("shouldGenerateAccountSummary", () => {
    const service = new AccountBalanceService();
    service.executeCashIn(100, new Object());
    service.executeCashOut(50, new Object());
    service.executeCashOut(60, new Object());

    //Validar que el balance final es de 90$
    //Validar que se generaron 3 operaciones
  });
});
