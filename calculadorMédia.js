function calculaNota() {
    var nomeAluno = document.getElementById("nomeAluno").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var mediaAluno = (nota1 + nota2) / 2;

    if ( mediaAluno < 3) {
      var status = "Reprovado";
    } else if (mediaAluno >= 3 && mediaAluno <= 6) {
      var status = "De Recuperação";
    } else if (mediaAluno > 6) {
      var status = "Aprovado";
    }
      document.getElementById("result").innerHTML = "o nome do aluno é " + nomeAluno + "a média foi de " + mediaAluno + ". " + nomeAluno + " está " + status + ".";
    }
