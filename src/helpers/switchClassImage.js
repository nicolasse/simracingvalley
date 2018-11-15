export const selectImg = (img) => {
  switch(img){
    case 'campeao.png': return require('../images/classes/campeao.png')
    case 'amador.png': return require('../images/classes/amador.png')
    case 'aprendiz.png': return require('../images/classes/aprendiz.png')
    case 'desafiante.png': return require('../images/classes/desafiante.png')
    case 'junior.png': return require('../images/classes/junior.png')
    case 'nao_ranqueado.png': return require('../images/classes/nao_ranqueado.png')
    default: return
  }
}

