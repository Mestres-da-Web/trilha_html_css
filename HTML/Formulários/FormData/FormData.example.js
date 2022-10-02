const formData = new FormData();

formData.set("first", "Jancer");
formData.set("last", "Lima");

formData.append("first", "Jancer");
formData.append("last", "Lima");

console.log(formData.has("first"));
console.log(formData.has("another"));

console.log(formData.get("first"));
console.log(formData.get("last"));

console.log(formData.delete("last"));
console.log(formData.has("last"));

formData.forEach((item) => console.log(item));

for (const p of formData) {
  console.log(p);
}
//for (const p of myFormData.entries())
