export async function loginUser(credentials) {
  localStorage.setItem("exploreIndiaDemoUser", JSON.stringify({email: credentials.email}));
  return {ok:true, user:{email:credentials.email}};
}
export async function signupUser(data) {
  localStorage.setItem("exploreIndiaDemoUser", JSON.stringify({name:data.name,email:data.email}));
  return {ok:true};
}
