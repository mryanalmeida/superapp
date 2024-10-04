document.getElementById('calcular').addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const ano = parseInt(document.getElementById('ano').value);

    if (!nome || isNaN(idade) || isNaN(ano) || idade <= 0 || ano <= 0) {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos obrigatórios e use valores válidos.";
        return;
    }

    const medias = [];

    function calcularMedia(materiaId) {
        let soma = 0;
        let notasContadas = 0;

        for (let i = 1; i <= 4; i++) {  
            const nota = parseFloat(document.getElementById(`${materiaId}n${i}`).value);
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                soma += nota;
                notasContadas++;
            } else if (nota < 0 || nota > 10) {
                document.getElementById('resultado').innerText = "As notas devem estar entre 0 e 10.";
                return null;
            }
        }

        return notasContadas > 0 ? (soma / notasContadas).toFixed(2) : 0;
    }

    const materias = [
        { id: 'materia1', nome: 'Matemática' },
        { id: 'materia2', nome: 'Biologia' },
        { id: 'materia3', nome: 'Inglês' },
        { id: 'materia4', nome: 'Química' },
        { id: 'materia5', nome: 'Filosofia' },
        { id: 'materia6', nome: 'História' },
        { id: 'materia7', nome: 'Educação Física' },
        { id: 'materia8', nome: 'Geografia' },
        { id: 'materia9', nome: 'Português' },
        { id: 'materia10', nome: 'Física' },
        { id: 'materia11', nome: 'Artes' },
        { id: 'materia12', nome: 'Sociologia' }
    ];

    materias.forEach(materia => {
        const media = calcularMedia(materia.id);
        if (media === null) {
            return;
        }
        const resultado = media >= 6.0 ? "Aprovado" : "Reprovado";
        medias.push({ nome: materia.nome, media: media, resultado: resultado });
    });

    let resultado = `Nome: ${nome}<br>Idade: ${idade}<br>Ano: ${ano}<br><br>Médias:<br>`;
    medias.forEach(materia => {
        resultado += `${materia.nome}: <span class="${materia.resultado === "Aprovado" ? 'aprovado' : 'reprovado'}">${materia.media} - ${materia.resultado}</span><br>`;
    });

    document.getElementById('resultado').innerHTML = resultado;
});

// Validação de entrada nas notas
for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 4; j++) {
        document.getElementById(`materia${i}n${j}`).addEventListener('input', function () {
            let value = parseFloat(this.value);
            if (value > 10) {
                this.value = 10;
            } else if (value < 0) {
                this.value = 0;
            }
        });
    }
}
