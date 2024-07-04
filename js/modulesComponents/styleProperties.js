export function styleOfEachProperty() {
  return `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .table__property {
      width: 90%;
      height: 23%;
  }

  #country_rocket, #sucess_rate_rocket {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
  }

  h3 {
      padding: 0;
  }

  .title {
      height: 60%;
      border-radius: 15px 15px 0 0;
      background-color: #0a0a0a; /* Negro para contraste */
      color: #00ff00; /* Verde neón */
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 2px solid #00ff00; /* Verde neón */
      font-weight: bold;
      font-size: 1.2em;
  }

  .value {
      height: 50%;
      background-color: #00008b; /* Azul oscuro */
      border-radius: 0 0 15px 15px;
      color: #ff4500; /* Rojo neón */
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #ff4500; /* Rojo neón */
      font-weight: bold;
      font-size: 1.2em;
  }
  `;
}
