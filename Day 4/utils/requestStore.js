export const limit = 5;
export let counter = 0;

export const setCounter = (value)=>{
  counter = value;
}

setInterval(() => {
  counter = 0;
}, 3000);