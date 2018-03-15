var $result = $('#result')
var $text = $('#text')
var $file = $('#file')
var $level = $('#level')

function $(selector) {
    return document.querySelector(selector)
}

function on($el, event, callback) {
    return $el.addEventListener(event, callback)
}

function showResult(value) {
    $result.innerHTML = [
        'original size:',
        value.length,
        ' / ',
        'gzipped size:',
        gzip.zip(value, {level: +$level.value}).length].join(' ')
}

var fileReader = new FileReader()

on(fileReader, 'loadend', function (e) {
    $text.value = e.target.result
    showResult(e.target.result)
})

on($text, 'input', function (e) {
    $file.value = ''
    showResult(e.target.value)
})

on($file, 'change', function (e) {
    var file = e.target.files[0]
    file && fileReader.readAsText(file)
})

on($level, 'change', function (e) {
    showResult($text.value)
})