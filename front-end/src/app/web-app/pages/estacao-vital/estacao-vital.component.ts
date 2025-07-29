import { Component, ViewChild, ElementRef } from '@angular/core';

// Interfaces para tipagem dos dados
interface Missao {
  id: number;
  descricao: string;
  xp: number;
  concluida: boolean;
  tipo: 'diaria' | 'semanal';
}

interface Conquista {
  id: number;
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-estacao-vital',
  templateUrl: './estacao-vital.component.html',
  styleUrls: ['./estacao-vital.component.css'],
})
export class EstacaoVitalComponent {
  // Propriedades da planta e do jogador
  nomePlanta: string = 'Planta Fofinha';
  editandoNome: boolean = false;
  xp: number = 0; // XP total acumulado
  xpMax: number = 200; // XP necessário para o próximo nível
  nivel: number = 1; // Nível inicial
  xpAnimado: number = 0; // Valor de XP usado para a animação da barra

  @ViewChild('inputNomePlanta') inputNomePlanta!: ElementRef;

  // Dados mocados de missões e conquistas
  missoes: Missao[] = [
    { id: 1, descricao: 'Beba 2 litros de água', xp: 50, concluida: false, tipo: 'diaria' },
    { id: 2, descricao: 'Faça uma consulta', xp: 150, concluida: false, tipo: 'diaria' },
    { id: 3, descricao: 'Pule de paraquedas', xp: 100, concluida: false, tipo: 'diaria' },
    { id: 4, descricao: 'Realize 5 missões diárias', xp: 300, concluida: false, tipo: 'semanal' },
    { id: 5, descricao: 'Faça 2 consultas na semana', xp: 200, concluida: false, tipo: 'semanal' },
    { id: 6, descricao: 'Assista 5 vídeos do Aprender+', xp: 100, concluida: false, tipo: 'semanal' },
  ];

  conquistas: Conquista[] = [
    { id: 1, descricao: 'Primeiros passos: completou sua primeira missão!', concluida: true },
  ];

  // Getters para filtrar as missões por tipo
  get missoesDiarias(): Missao[] {
    return this.missoes.filter((m) => m.tipo === 'diaria');
  }

  get missoesSemanais(): Missao[] {
    return this.missoes.filter((m) => m.tipo === 'semanal');
  }

  get ultimaConquista(): Conquista {
    // Retorna a última conquista ou um objeto padrão se não houver nenhuma
    return this.conquistas.length > 0
      ? this.conquistas[this.conquistas.length - 1]
      : { id: 0, descricao: 'Nenhuma conquista ainda.', concluida: false };
  }

  /**
   * Marca uma missão como concluída e inicia a animação de ganho de XP.
   * @param missao A missão a ser completada.
   */
  completarMissao(missao: Missao): void {
    if (missao.concluida) return;
    missao.concluida = true;
    this.animarGanhoDeXp(missao.xp);
  }

  /**
   * Anima o ganho de XP na barra de progresso e cuida da lógica de subida de nível.
   * @param xpGanho A quantidade de XP a ser adicionada.
   */
  private animarGanhoDeXp(xpGanho: number): void {
    this.xp += xpGanho;
    let totalXpParaAnimar = xpGanho;

    const animacao = setInterval(() => {
      if (totalXpParaAnimar <= 0) {
        clearInterval(animacao);
        return;
      }

      this.xpAnimado++;
      totalXpParaAnimar--;

      // Verifica se subiu de nível
      if (this.xpAnimado >= this.xpMax) {
        this.nivel++;
        this.xpAnimado = 0;
        this.xpMax = Math.floor(this.xpMax * 1.5);
      }
    }, 12); // Ajuste a velocidade da animação aqui (10ms por ponto de XP)
  }

  /**
   * Habilita o modo de edição para o nome da planta e foca no input.
   */
  habilitarEdicaoNome(): void {
    this.editandoNome = true;
    setTimeout(() => this.inputNomePlanta?.nativeElement.focus(), 0);
  }

  /**
   * Desabilita o modo de edição e salva o novo nome.
   */
  desabilitarEdicaoNome(): void {
    this.editandoNome = false;
    // Aqui você pode adicionar a lógica para salvar o nome (ex: API, localStorage)
    console.log('Nome da planta salvo:', this.nomePlanta);
  }
}