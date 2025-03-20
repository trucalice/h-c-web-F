let input = prompt("Nhập một ký tự:");

while(input.length !== 1 || input.toLowerCase() === input.toUpperCase()){
    alert("Không phải chữ cái");
    input = prompt("Vui lòng nhập lại (1 chữ cái):");
}

if (input.length === 1 && input.toLowerCase() !== input.toUpperCase()) {
    document.writeln(`Ký tự ${input} là chữ cái`);
}
