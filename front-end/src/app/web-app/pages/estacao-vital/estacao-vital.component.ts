import { Component } from '@angular/core';

interface Planta {
  
}

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
  styleUrls: ['./estacao-vital.component.css']
})
export class EstacaoVitalComponent {
  xp = 175;
  xpMax = 200;
  nivel = 10;

  missoes: Missao[] = [
    { id: 1, descricao: 'Beba 200 litros de agua', xp: 100, concluida: false, tipo: 'diaria' },
    { id: 2, descricao: 'Faça uma consulta', xp: 150, concluida: false, tipo: 'diaria' },
    { id: 3, descricao: 'Pule de paraquedas', xp: 100, concluida: false, tipo: 'diaria' },
    { id: 4, descricao: 'Realize 5 missões', xp: 300, concluida: false, tipo: 'semanal' },
    { id: 5, descricao: 'Faça 2 consultas', xp: 100, concluida: false, tipo: 'semanal' },
    { id: 6, descricao: 'Assista 5 vídeos do Aprender+', xp: 100, concluida: false, tipo: 'semanal' }
  ];

  conquistas: Conquista[] = [
    { id: 1, descricao: 'cuzinho cuzinho', concluida: true}
  ]

  completarMissao(missao: Missao): void {
    if (missao.concluida) return;

    missao.concluida = true;
    this.xp += missao.xp;

  }

  get missoesDiarias(): Missao[] {
    return this.missoes.filter(m => m.tipo === 'diaria');
  }

  get missoesSemanais(): Missao[] {
    return this.missoes.filter(m => m.tipo === 'semanal');
  }
  
  get ultimaConquista(): Conquista {
  return this.conquistas[this.conquistas.length - 1];
  }
}