
for (let i = 1; i <= 9; i++) {
  
  let arr = ['\\','|','/','-'];
  setTimeout(() => {
    process.stdout.write(`\r${arr[i % 4]}    `);
  }, 200 * i);

}
