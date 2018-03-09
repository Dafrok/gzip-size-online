var $result = $('#result')
var $text = $('#text')
var $file = $('#file')

function $(selector) {
    return document.querySelector(selector)
}

function on($el, event, callback) {
    return $el.addEventListener(event, callback)
}

function showResult(value) {
    $result.innerHTML = [value.length, gzip.zip(value).length].join(',')
}

var fileReader = new FileReader()

on(fileReader, 'loadend', function (e) {
    $text.value = e.target.result
    showResult(e.target.result)
})

on($text, 'input', function (e) {
    showResult(e.target.value)
})

on($file, 'change', function (e) {
    var file = e.target.files[0]
    fileReader.readAsText(file)
})