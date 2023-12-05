
function limparCheckboxes()
{
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox)
    {checkbox.checked=false;}
    );
}
