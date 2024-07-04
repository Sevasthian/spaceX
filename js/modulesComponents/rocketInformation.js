

export const getAllRocketInformation= (rocket) => {


    //Titulo descripcion
    let descriptionTitle = document.createElement('h3')
    descriptionTitle.id ='description__title'
    descriptionTitle.textContent = 'Description'

    //descripcion del rocket
    let information = [];
    let descriptionEachRocket = document.createElement('div')
    descriptionEachRocket.classList.add('each_rocket__description')
    descriptionEachRocket.innerHTML = `${rocket.description}`


    //Id del cohete
    let rocketId = document.createElement('div')
    rocketId.classList.add('rocket__id')

    let idRocket = document.createElement('p')
    idRocket.id = 'id_rocket'
    idRocket.textContent = `ID: ${rocket.id}`

    // if (rocket.id == "5e9d0d95eda69955f709d1eb"){
    //     rocketImage.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg'
    // } else {
    //     rocketImage.src = rocket.flickr_images[1]
    // }
    
    rocketId.append(idRocket)

    //titulo del cohete

    let stagesTitle = document.createElement('h3')
    stagesTitle.id ='stages__title'
    stagesTitle.textContent = 'Stages'

    //Contenedor de los estados del cohete

    let stagesContainer = document.createElement('div')
    stagesContainer.classList.add('stages__container')

    let stage1 = document.createElement('div')
    stage1.classList.add('stage_1')

    let stage_photo = document.createElement('div')
    stage_photo.classList.add('stage__photo')
    let stage_photo_image = document.createElement('img')
    stage_photo_image.src = 'https://cdn-icons-png.freepik.com/512/3840/3840653.png'

    stagesContainer.append(stage1)
    stage1.append(stage_photo)
    stage_photo.append(stage_photo_image)


    //Informacion de la etapa 1

    let stage_information = document.createElement('div')
    stage_information.classList.add('stage__information')

    let reusableStage = document.createElement('p')
    reusableStage.id = '1_reusableStage'
    reusableStage.innerHTML = `<b> Reusable: </b> ${rocket.first_stage.reusable}`

    let fuel = document.createElement('p')
    fuel.id = '1_fuel'
    fuel.innerHTML = `<b>Fuel tons:</b> ${rocket.first_stage.fuel_amount_tons}`

    let engines = document.createElement('p')
    engines.id = '1_engines'
    engines.innerHTML = `<b>Engines: </b> ${rocket.first_stage.engines}`

    stagesContainer.append(stage_information)
    stage1.append(stage_information)
    stage_information.append(reusableStage)
    stage_information.append(fuel)
    stage_information.append(engines)


    //Etapa 2  

    let stage2 = document.createElement('div')
    stage2.classList.add('stage_2')

    let stage2_photo = document.createElement('div')
    stage2_photo.classList.add('stage__photo')

    let stage2_photo_image = document.createElement('img')
    stage2_photo_image.src = 'https://cdn-icons-png.flaticon.com/256/3840/3840738.png'

    stagesContainer.append(stage2)
    stage2.append(stage2_photo)
    stage2_photo.append(stage2_photo_image)

    //Informacion de la etapa 2

    let stage_information2 = document.createElement('div')
    stage_information2.classList.add('stage_information')

    let reusableStage2 = document.createElement('p')
    reusableStage2.id = '2_reusableStage'
    reusableStage2.innerHTML = `<b> Reusable: </b> ${rocket.second_stage.reusable}`

    let fuel2 = document.createElement('div')
    fuel2.classList.add('2_fuel')
    fuel2.innerHTML = `<b> Fuel tons: ${rocket.second_stage.fuel_amount_tons}</b>`


    let engines2 = document.createElement('p')
    engines2.id = '2_engines'
    engines2.innerHTML = `<b>Engines: </b> ${rocket.second_stage.engines}`

    stagesContainer.append(stage_information2)
    stage2.append(stage_information2)
    stage_information2.append(reusableStage2)
    stage_information2.append(fuel2)
    stage_information2.append(engines2)


    let moreInformationTitle = document.createElement('h3')
    moreInformationTitle.id ='more_information'
    moreInformationTitle.textContent = 'More Information'

    //Contenedor de la informacion

    let moreInformationContainer = document.createElement('div')
    moreInformationContainer.classList.add('more_information_rocket')

    //First flight
    
    let firstFlight = document.createElement('div')
    firstFlight.classList.add('first_flight')

    let firstFlightIcon = document.createElement('div')
    firstFlightIcon.classList.add('icon')

    let firstFlightIconImage = document.createElement('img')
    firstFlightIconImage.src = 'https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3994327-3307661.png?f=webp'

    let firstFlightText = document.createElement('div')
    firstFlightText.classList.add('text')

    let firstFlightTitle = document.createElement('h4')
    firstFlightTitle.id = 'first_flight_title'
    firstFlightTitle.textContent = 'First flight'


    let firstFlightDate = document.createElement('p')
    firstFlightDate.id = 'date_first_flight'
    firstFlightDate.textContent = `${rocket.first_flight}`


    moreInformationContainer.append(firstFlight)
    firstFlight.append(firstFlightIcon)
    firstFlightIcon.append(firstFlightIconImage)
    firstFlight.append(firstFlightText)
    firstFlightText.append(firstFlightTitle)
    firstFlightText.append(firstFlightDate)

    // Cost Launch

    let costLaunch = document.createElement('div')
    costLaunch.classList.add('cost_launch')

    let costLaunchIcon = document.createElement('div')
    costLaunchIcon.classList.add('icon')

    let costLaunchIconImage = document.createElement('img')
    costLaunchIconImage.src = 'https://cdn3d.iconscout.com/3d/premium/thumb/dollar-5374098-4492234.png?f=webp'

    let costLaunchText = document.createElement('div')
    costLaunchText.classList.add('text')

    let costLaunchTitle = document.createElement('h4')
    costLaunchTitle.id = 'cost_launch_title'
    costLaunchTitle.textContent = 'Cost of launch'

    let costLaunchDollars = document.createElement('p')
    costLaunchDollars.id = 'cost_dollars'
    costLaunchDollars.innerHTML = `${rocket.cost_per_launch.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).replace(",00", "")}`


    moreInformationContainer.append(costLaunch)
    costLaunch.append(costLaunchIcon)
    costLaunchIcon.append(costLaunchIconImage)
    costLaunch.append(costLaunchText)
    costLaunchText.append(costLaunchTitle)
    costLaunchText.append(costLaunchDollars)

    // Status

    let statusRocket = document.createElement('div')
    statusRocket.classList.add('status')

    let statusRocketIcon = document.createElement('div')
    statusRocketIcon.classList.add('icon')

    let statusRocketIconImage = document.createElement('img')
    statusRocketIconImage.src = 'https://cdn3d.iconscout.com/3d/premium/thumb/switch-on-8820071-7139032.png?f=webp'

    let statusRocketText = document.createElement('div')
    statusRocketText.classList.add('text')

    let statusRocketTitle = document.createElement('h4')
    statusRocketTitle.id = 'status_title'
    statusRocketTitle.textContent = 'Active'

    let statusRocketStatus = document.createElement('p')
    statusRocketStatus.id = 'status_rocket'
    statusRocketStatus.innerHTML = `${rocket.active}`

    moreInformationContainer.append(statusRocket)
    statusRocket.append(statusRocketIcon)
    statusRocketIcon.append(statusRocketIconImage)
    statusRocket.append(statusRocketText)
    statusRocketText.append(statusRocketTitle)
    statusRocketText.append(statusRocketStatus)

    information.push(rocketId)
    information.push(descriptionTitle )
    information.push(descriptionEachRocket)
    information.push(stagesTitle)
    information.push(stagesContainer)
    information.push(moreInformationTitle)
    information.push(moreInformationContainer)



    
    return information

}