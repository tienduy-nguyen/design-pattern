class Bank {
  getName() {}
}
class TPBank extends Bank {
  getName() {
    return 'TPBank';
  }
}
class VietcomBank extends Bank {
  getName() {
    return 'VietcomBank';
  }
}
class BankFactory {
  static getBank(type) {
    switch (type) {
      case 'TPBANK':
        return new TPBank();
      case 'VIETCOMBANK':
        return new VietcomBank();
      default:
        break;
    }
  }
}

const BankType = Object.freeze({
  TPBANK: 'TPBANK',
  VIETCOMBANK: 'VIETCOMBANK',
});

const tpBank = BankFactory.getBank(BankType.TPBANK);
console.log(tpBank.getName());
