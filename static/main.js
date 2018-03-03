var $result = document.getElementById('result')
var $text = document.getElementById('text')
$text.addEventListener('input', function (e) {
    $result.innerHTML = gzip.zip(e.target.value).length
})
