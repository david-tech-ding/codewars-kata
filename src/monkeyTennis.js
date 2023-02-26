function ballCollector(detritus) {
    const tennisBalls = detritus.filter(ball => ball === 58);
    const totalWeight = tennisBalls.reduce((acc, ball) => acc + ball, 0);
    return {weight: totalWeight}
  }