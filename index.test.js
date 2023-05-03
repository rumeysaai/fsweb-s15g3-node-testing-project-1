const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
   test('[3] verilen propu trimliyor', () => {
    const input = { isim: '  jane  ' , yas: ' 34 '};
    const expected = { isim: 'jane', yas: ' 34 '};
    const tested = utils.verileniTrimle(input, "isim");
    expect(tested).toEqual(expected);
   })
   test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    const input = { isim: '  jane  ' , yas: ' 34 '};
    const tested = utils.verileniTrimle(input)
    expect(tested).toEqual(input);
   })
})


describe('[Görev 3] enBuyukTamsayiyiBul', () => {
   test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    const expected = 3;
    const tested = utils.enBuyukTamsayiyiBul(input);
    expect(tested).toEqual(expected);
   })
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
   test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
      expect(sayici.asagiSay()).toEqual(3);
   })
   test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
      sayici.asagiSay()
      expect(sayici.asagiSay()).toEqual(2);
   })
   test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    sayici.asagiSay()
    expect(sayici.asagiSay()).toBe(0);
   })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler
  beforeEach(() => {
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
   test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe("yaz");
   })
   test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe("yaz");
    expect(mevsimler.sonraki()).toBe("sonbahar");
})
   test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe("yaz");
    expect(mevsimler.sonraki()).toBe("sonbahar");
    expect(mevsimler.sonraki()).toBe("kış");
   })
   test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe("yaz");
    expect(mevsimler.sonraki()).toBe("sonbahar");
    expect(mevsimler.sonraki()).toBe("kış");
    expect(mevsimler.sonraki()).toBe("ilkbahar");
    
   })
   test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe("yaz");
    expect(mevsimler.sonraki()).toBe("sonbahar");
    expect(mevsimler.sonraki()).toBe("kış");
    expect(mevsimler.sonraki()).toBe("ilkbahar");
    expect(mevsimler.sonraki()).toBe("yaz");
   })
   test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for(let i = 0; i<39; i++){
      mevsimler.sonraki();
    }
    expect(mevsimler.sonraki()).toBe("ilkbahar");
   })
})

describe('[Görev 6] Araba', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
   test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    expect(focus.sur(100)).toEqual(100);
    expect(focus.sur(100)).toEqual(200);
    expect(focus.sur(100)).toEqual(300);
    expect(focus.sur(200)).toEqual(500);
    expect(focus.sur(200)).toEqual(600);
   })
   test('[16] arabayı sürmek benzin tüketiyor', () => {
    focus.sur(300);
    expect(focus.depo).toBe(10)
   })
   test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    focus.sur(600);
    focus.benzinal(10);
    focus.sur(100);
    expect(focus.odometer).toBe(700);
   })
   test('[18] dolu depoya benzin alma etki etmiyor', () => {
    focus.benzinal(10);
    expect(focus.depo).toBe(20);
   })
})

describe('[Görev 7] asenkronCiftSayi', () => {
   test('[19] bir çift sayı verilirse true çözümlüyor', async() => {
    const sayi = await utils.asenkronCiftSayi(2);
    expect(sayi).toBeTruthy();
   })
   test('[20] tek sayı verilirse false çözümlüyor', async() => {
    const sayi = await utils.asenkronCiftSayi(3);
    expect(sayi).toBeFalsy();
   })
})
