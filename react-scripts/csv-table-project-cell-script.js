const [cellData, setCellData] = useState({});

useEffect(() => {
    console.log(cellData);
}, [cellData])


function MudaComp() {


    let testArray = [["first", "1", "5", "10", "0"], ["second", "3", "7", "12", "0"], ["third", "5", "9", "14", "0"], ["fourth", "4", "8", "13", "0"]]
    //'second', "3", "7", "12","0"
    // , ["third", "5", "9", "14","0"]
    let obj = {}
    let childObj = {}


    testArray.forEach((element, index) => {
        // console.log(element[0])
        // console.log(element[index]);


        // console.log(obj[`${element[index]}`])
        element.forEach((e, childIndex) => {
            if (childIndex === 0) {
                return obj[`${element[0]}`] = {}
            }
            if (e == "0") {
                Object.assign(childObj, {
                    [childIndex]: {
                        clicked: true,
                        value: e

                    }
                })
            } else {
                Object.assign(childObj, {
                    [childIndex]: {
                        clicked: false,
                        value: e

                    }
                })
            }
            // childObj = {
            //     [childIndex]:{
            //         value:element,
            //         clicked:false
            //     }
            // } 
            // console.log(childObj);
            //obj[`${element[index]}`];

            // console.log(e);

        }); Object.assign(obj[`${element[0]}`], childObj);
    });


    setCellData(obj);
    // console.log(obj.first[2].value)
    // obj.first[1].clicked = true

    // console.log(obj.first[1]);

}

function changeObject() {
    MudaObject("second", 1)
}

function MudaObject(name, columnIndex) {

    function stateToggle() {
        return !cellData[name][columnIndex].clicked
    }

    const togleState = () => setCellData({
        ...cellData,
        [name]: {
            ...cellData[name],
            [columnIndex]: {
                ...cellData[name][columnIndex],
                clicked: stateToggle()
            }
        }
    })
    togleState()

    return (
        <>
            <h1><button onClick={MudaComp}>Click to log</button></h1>
            <h1><button onClick={changeObject}>Change me!</button></h1>
        </>
    )   // showData()
}