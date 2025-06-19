function analyzeData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  }
  else if (typeof data === 'number') {
    console.log(data * 2);
  } else if (typeof data === 'boolean') {
    console.log(data ? 'Si' : 'No');
  } else {
    console.log('Tipo non supportato');
  }
}


analyzeData("hello");
analyzeData(5);
analyzeData(true);
analyzeData(false);
analyzeData({});