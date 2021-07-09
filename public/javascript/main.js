var deleteButton = document.querySelector('#delete-button')



deleteButton.addEventListener('click', _=> {
    fetch('/api/remove/:id', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: req.params.id
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === {error: err}) {
        messageDiv.textContent = 'No quote to delete'
      } else {
        window.location.reload(true)
      }
    })
})