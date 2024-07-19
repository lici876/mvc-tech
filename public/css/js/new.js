console.log("ready to create a post");

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('').value.trim();
  const post_body = document.querySelector('').value.trim();

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('').addEventListener('submit', newFormHandler);