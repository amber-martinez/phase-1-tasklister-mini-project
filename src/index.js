document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value)
    form.reset()
  })
})

function addToDo(thingToDo){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  // let priorityTag = document.getElementById('priority')
  btn.addEventListener('click', deleteThing)
  p.textContent = `${thingToDo} `
  btn.textContent = 'delete'
  p.appendChild(btn)
  // p.appendChild(priorityTag)
  document.getElementById('list').appendChild(p)
  
}

function deleteThing(e) {
  e.target.parentNode.remove()
}