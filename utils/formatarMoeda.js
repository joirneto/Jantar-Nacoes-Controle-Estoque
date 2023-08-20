import {formatCurrency} from '@brazilian-utils/brazilian-utils';

export default function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  }

  export function convertToCurrency(value = 0) {
    return `R$ ${formatCurrency(value / 100)}`;
  }
  
  export function convertToCents(value = '0') {
    return Number(value.replace(/[R$.,\s]/g, ''));
  }
  

  

