calcinit = () => {
  f = getValue("F");
  d1 = getValue("d1");
  d2 = getValue("d2");
  dAv = dAvCalc(d1, d2);
  Hvnum = 1.8544 * (f / Math.pow(dAv, 2));
  showReasult(Hvnum);
};

getValue = (x) => {
  return parseFloat(document.getElementById(x).value);
};

dAvCalc = (d1, d2) => {
  return (d1 + d2) / 2;
};

showReasult = (Hvnum) => {
  p = document.getElementById("resHead");
  p.innerHTML = `&nbsp;&nbsp;Hv = ${Math.floor(Hvnum)}`;
};
