export function styleOfEachProperty() {

    return `    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
      
    .table__property{

        width: 90%;
        height: 23%;
      
      }
    #country_rocket, #sucess_rate_rocket{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px
      }

    h3{
        padding: 0
    }
    .title{
      
        height: 60%;
        border-radius: 15px 15px 0px 0px;
        background-color: #1d1f38;
        color: #ffff;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid #55588a
    }
      
      .value{
        height: 50%;
        background-color: #55588a;
        border-radius: 0px 0px 15px 15px;
        color: #ffff;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }`

}
