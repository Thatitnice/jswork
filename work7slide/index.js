function sort(method){
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues = los.value()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
}