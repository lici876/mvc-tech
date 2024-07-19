console.log("ready to edit a post");
const post_id = window.location.href.split("/").pop();
console.log(post_id);

const editButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('').value.trim();
  const post_body = document.querySelector('').value.trim();

  console.log(post_id);
  await fetch(`/api/post/${post_id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_body,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("")
  .addEventListener("click", editButtonHandler);

