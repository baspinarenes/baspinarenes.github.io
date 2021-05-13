---
layout: post
title: 'Modül Modül Python: Random'
excerpt: 'Python geliştirirken bazı zamanlar rastgeleliğe farklı şekillerde ihtiyaç duyabiliriz. Örneğin 0-100 arasında herhangi bir sayı üretmek veya listeden rastgele eleman seçmek isteyebiliriz. Böyle zamanlarda Python ile birlikte gelen **random** modülü imdadımıza yetişiyor.'
tag: [module, random, seed, shuffle]
---

Python geliştirirken bazı zamanlar rastgeleliğe farklı şekillerde ihtiyaç duyabiliriz. Örneğin 0-100 arasında herhangi bir sayı üretmek isteyebiliriz veya bir listeden rastgele eleman seçmek isteyebiliriz. Böyle zamanlarda Python ile birlikte gelen **random** modülü imdadımıza yetişiyor

## Rastgele Sayı Nasıl Üretilir?

Modüldeki fonksiyonlara bakacağız. Ancak öncesinde bu rastgeleliğin nasıl sağlandığına bakmak faydalı olabilir.

Rastgele sayı günümüzde iki temel yöntem ile sağlanıyor: fiziksel veriler veya matematiksel işlemler yardımıyla. Bizi ilgilendiren ikinci yöntem. Bunu yöntemi kullananlara **Pseudorandom Number Generators** yani **Sözde Rassal Sayı Üreteçleri** diyoruz. Bunlar sayı dizileri oluşturan algoritmalardır. Başlangıç olarak olarak bir **seed** yani **tohum** değeri alırlar ve üzerinde matematiksel işlemler uygularlar. Elde edilen her sonuca tekrar aynı matematiksel işlemler uygulayarak devam ederler. Ancak sayıları tekrarlı olacak şekilde üretirler. Tohum değeri girdiğimizde algoritma her çalıştırdığımızda rastgele sayıları aynı sırada basarlar. Varsayılan değer ise o anda bilgisayarın zamanıdır. Bu sayede tohum her seferinde otomatik olarak değişecektir ve her başlangıçta farklı sayılar üretir.

Sözde rassal sayı üreten algoritmaların belirli bir sayıdan sonra tekrara düşeceklerini söylemiştik. Kaba bir tabirle, bu sayı ne kadar büyük ise algoritma o kadar iyi rastgeledir diyebiliriz. Modülümüzün kullandığı **Mersenne Twister** üretecinde, bu tekrar 2^19937-1 sayıda bir gerçekleşir. Kullanılan en yaygın algoritmalardandır ve tekrar sayısı yeterince yüksektir.

Nasıl çalıştığıyla ilgili güzel bir görselleştirme görmek isterseniz ilgili videoya bakabilirsiniz:

<iframe width="692" height="389" src="https://www.youtube.com/embed/_tN2ev3hO14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Modüldeki Fonksiyonlar

Modülde daha fazla fonksiyon olsa da diğerleri spesifik olarak matematik ile uğraştığımızda işimize yarayacak olsalar da herkes için kullanışlı değillerdir. Bu sebeple bu fonksiyonlardan 13 tanesine önemli parametreleriyle birlikte değineceğiz.

Unutmadan söyleyeyim, bu fonksiyonları ve parametrelerini sıralarken 3.9 sürümünün belgelerini kullanıyorum. Bazı küçük farklılıklarla karşılaşırsanız sebebi bundandır. Ama çoğu şey aynı olacaktır.

### seed()

Kullanım şekli `random.seed(a=None)` olan bu fonksiyon, üreteç için tohum belirler. Parametre verilmişse o değeri, verilmemişse varsayılan None değeriyle birlikte sistem saatini tohum olarak kullanılır.

> Tohumun, algoritmaya verilen ve üzerinden rastgele sayı<br> üretilen ilk değer olduğunu unutmayın.</blockquote>

### getstate()

Kullanım şekli `random.getstate()` olan bu fonksiyon, üretecin mevcut durumunu depolayan bir nesne döndürür. Başka bir zaman kaldığın yerden devam etmek için **setstate()** fonksiyonuna gönderilebilir.

### setstate()

Kullanım şekli `random.setstate(state)` olan bu fonksiyon, rastgele sayı üretme işlemini öncesinde **getstate()** ile elde edilmiş bir durumdan devam ettirir.

### randbytes()

Kullanım şekli `random.randbytes(n)` olan bu fonksiyon, verilen sayı kadar rastgele bayt üretir.

### randrange()

Kullanım şekli `random.randrange(start, stop[, step])` olan bu fonksiyon, verilen aralık dahilinde rastgele bir sayı verir. step parametresi ilk sayıdan sonra kaçar atlayarak sayıların alınacağını belirtir.

> İçeriğinin <strong>range()</strong> kullanırken içine yazdığımız biçimde olduğuna dikkat edin.</blockquote>

> <strong>choice(range(start, stop, step))</strong> ile arasındaki fark <strong>range()</strong> nesnesinin oluşturulmamasıdır. Boş yere bellek işgalinden kaçınmak lazım.</blockquote>

### randint()

Kullanım şekli `random.randint(a, b)` olan bu fonksiyon, _a <= N <= b_ aralığında bulunan rastgele bir sayı verir.

> <strong>randrange(a, b+1)</strong> işleminin takma ismi gibi düşünebiliriz.</blockquote>

### getrandbits()

Kullanım şekli `random.getrandbits(k)` olan bu fonksiyon, _k_ bit ile ifade edilebilinecek sayılardan rastgele birini seçer. Örneğin k=2 olduğunda ele alınacak sayılar binary olarak 2 bit ile ifade edilebilen 0, 1, 2, 3 (00, 01, 10, 11) sayılarıdır.

### choice()

Kullanım şekli `random.choice(seq)` olan bu fonksiyon, verilen diziden (string, list ve tuple vs) rastgele bir öğe seçer.

### choices()

Kullanım şekli `random.choices(seq, k=1 weights=None, cum_weights=None)` olan bu fonksiyon, diziden k adet rastgele öğe seçer. weights parametresi öğelerin ağırlıklarını belirtir. Seçimler bu ağırlıklara göre yapılır. cum-weights ise kümülatif ağırlıkları kullanmak istersek tercihimiz olabilir.

> Arkaplanda seçim yapılmadan önce göreli ağırlıklar, kümülatif ağırlıklara dönüştürülür. Bu nedenle kümülatif ağırlıkların sağlanması işten tasarruf sağlar.</blockquote>

> <strong>choices()</strong> fonksiyonu listeden öğe seçerken aynı öğeleri alabilir, ancak <strong>sample()</strong> fonksiyonu benzersiz olarak seçim yapar yani daha önce aldığı öğeyi bir daha alamaz. Bu sebeple <strong>choices()</strong> ile alınan eleman sayısı diziden fazla olabilirken, <strong>sample()</strong> ile alınan eleman sayısı dizi boyutuyla aynı veya küçük olmalıdır.

</blockquote>

### shuffle()

Kullanım şekli `random.shuffle(x)` olan bu fonksiyon, verilen dizinin öğelerini yerinde (in-place) karıştırır.

> <strong>immutable</strong> bir diziyi karıştırmak ve karıştırılmış yeni diziyi<br> döndürmek için bunun yerine <strong>sample(x, k=len(x))</strong> kullanın.</blockquote>

### sample()

Kullanım şekli `random.sample(seq, k)` olan bu fonksiyon, diziden seçilen k adet öğeyi liste olarak verir.

> Bir sayı aralığından rastgele sayılar seçmek için kullanılabilir: <strong>sample(range(10000000), k=60)</strong></blockquote>

> <strong>choices()</strong> fonksiyonu listeden öğe seçerken aynı öğeleri alabilir, ancak <strong>sample()</strong> fonksiyonu benzersiz olarak seçim yapar yani daha önce aldığı öğeyi bir daha alamaz. Bu sebeple <strong>choices()</strong> ile alınan eleman sayısı diziden fazla olabilirken, <strong>sample()</strong> ile alınan eleman sayısı dizi boyutuyla aynı veya küçük olmalıdır.</blockquote>

### random()

Kullanım şekli `random.random()` olan bu fonksiyon, 0 ve 1 aralığında rastgele ondalıklı sayı seçer.

> Random modülünün en temel fonksiyonudur.<br>Diğer fonksiyonların neredeyse tamamı bu fonksiyona bağlıdır.</blockquote>

### uniform()

Kullanım şekli `random.uniform(a, b)` olan bu fonksiyon, verilen aralıkta rastgele ondalıklı sayı seçer. Parametrelerden hangisi daha büyükse üst limit olur, diğeri de alt limit olur.

---

## Örnekler

Öncelik ile modülümüzü kodumuza dahil edelim:

```python
import random
```

Ardından ele alacağımız ilk fonksiyonlar olan `randint()`, `uniform()` ve `choice()` için basit bir senaryo kuralım ve kendimize hayali 3 arkadaş edinelim. Ve onlara verdiğimiz isimleri bir listeye ekleyelim:

```python
isimler = ["Ahmet", "Kemal", "Ece", "Mehmet", "Emine"]
```

Arkadaşlarımızın isimlerini belirledik lakin onlara ait bilgileri de eklemek istiyoruz. Öncelikle bilgileri depolamak için bir sözlük oluşturalım. Sözlükte her arkadaşımıza değer olarak ekleyeceğimiz bir bilgi taslağı oluşturalım. Böylece her birinin bilgilerini depolayabileceğimiz boş değişkenleri olmuş olsun:

```python
# ilk değerleri bilmediğimiz için None atayalım
bilgi_taslagi = {"yas": None, "boy": None, "takim": None}
# bu kısımda her isime ait bilgileri tutması için
# bilgi taslagini ekleyelim. dict mutable olduğu
# için kopya bir sözlük vermeyi unutmamak gerekir.
# yoksa her kişi için bilgiler en son eklenen
# olarak gözükecektir.
arkadaslar = dict((isim, bilgi_taslagi.copy()) for isim in isimler)
print(arkadaslar)

""" Çıktı:
{
'Ahmet': {'yas': None, 'boy': None, 'takim': None},
'Kemal': {'yas': None, 'boy': None, 'takim': None},
'Ece':   {'yas': None, 'boy': None, 'takim': None},
'Mehmet':{'yas': None, 'boy': None, 'takim': None},
'Emine': {'yas': None, 'boy': None, 'takim': None}}
"""
```

Çıktıya baktığınızda az önce yaptığımız işlemi daha rahat anlayabilirsiniz. Öncelikle yaş bilgimizi rastgele veriler ile dolduralım. Bunun için `randint()` fonksiyonunu kullanalım:

```python
for arkadas in arkadaslar:
    arkadaslar[arkadas]["yas"] = random.randint(18, 30)

print(arkadaslar)

""" Çıktı:
{
'Ahmet': {'yas': 25, 'boy': None, 'takim': None},
'Kemal': {'yas': 30, 'boy': None, 'takim': None},
'Ece':   {'yas': 19, 'boy': None, 'takim': None},
'Mehmet':{'yas': 26, 'boy': None, 'takim': None},
'Emine': {'yas': 22, 'boy': None, 'takim': None}
}
"""
```

`randint()` bildiğimiz gibi verilen aralıkta rastgele tamsayı verir. Şimdi de boy bilgilerini metre cinsinden rastgele veriler ile dolduralım. Bunun için `uniform()` fonksiyonunu kullanabiliriz:

```python
for arkadas in arkadaslar:
    # bildiğimiz gibi float sayılar uzuuunca gösterilir.
    # bunu engellemek için round ile virgülden sonra
    # 2 basamağa yuvarlıyoruz.
    arkadaslar[arkadas]["boy"] = round(random.uniform(1.60, 2), 2)

print(arkadaslar)

""" Çıktı:
{
'Ahmet': {'yas': 25, 'boy': 1.63, 'takim': None},
'Kemal': {'yas': 30, 'boy': 1.93, 'takim': None},
'Ece':   {'yas': 19, 'boy': 1.86, 'takim': None},
'Mehmet':{'yas': 26, 'boy': 1.74, 'takim': None},
'Emine': {'yas': 22, 'boy': 1.93, 'takim': None}
}
"""
```

Nihayetinde sadece takım bilgilerini doldurmak kaldı. Bunun için küçük bir takım listesi oluşturalım ve listeden rastgele seçerek dolduralım. Bunun için `choice()` fonksiyonunu kullanabiliriz:

```python
takimlar = ["FB", "GS", "BJK"]

for arkadas in arkadaslar:
    arkadaslar[arkadas]["takim"] = random.choice(takimlar)

print(arkadaslar)

""" Çıktı:
{
'Ahmet': {'yas': 25, 'boy': 1.63, 'takim': 'FB'},
'Kemal': {'yas': 30, 'boy': 1.93, 'takim': 'GS'},
'Ece':   {'yas': 19, 'boy': 1.86, 'takim': 'FB'},
'Mehmet':{'yas': 26, 'boy': 1.74, 'takim': 'FB'},
'Emine': {'yas': 22, 'boy': 1.93, 'takim': 'BJK'}
}
"""
```

Artık tüm arkadaşlarımızın bilgilerini doldurmuş olduk! Kodumuzu temize çekelim ve tam haline bir bakalım:

```python
import random

isimler = ["Ahmet", "Kemal", "Ece", "Mehmet", "Emine"]
bilgi_taslagi = {"yas": None, "boy": None, "takim": None}
arkadaslar = dict((isim, bilgi_taslagi) for isim in isimler)
takimlar = ["FB", "GS", "BJK"]

# bu kısımda her birini tek bir for içerisinde yazabiliriz.
for arkadas in arkadaslar:
    arkadaslar[arkadas]["yas"] = random.randint(18, 30)
    arkadaslar[arkadas]["boy"] = round(random.uniform(1.60, 2), 2)
    arkadaslar[arkadas]["takim"] = random.choice(takimlar)

print(arkadaslar)

""" Çıktı:
{
'Ahmet': {'yas': 25, 'boy': 1.63, 'takim': 'FB'},
'Kemal': {'yas': 30, 'boy': 1.93, 'takim': 'GS'},
'Ece':   {'yas': 19, 'boy': 1.86, 'takim': 'FB'},
'Mehmet':{'yas': 26, 'boy': 1.74, 'takim': 'FB'},
'Emine': {'yas': 22, 'boy': 1.93, 'takim': 'BJK'}
}
"""
```

Pekala kodun başına `seed()` eklesek neler olurdu? Hemen deneyelim. Öncelikle modülü dahil ettikten sonra tohumu 200 olarak seçelim. Ve birden fazla kez çalıştıralım:

```python
import random

random.seed(200)
...

# kodu basit tutmak adına geri kalanını buraya eklemeyeceğim.
# bu komutu modülü dahil ettikten sonra eklememiz gerekiyor.
```

Her seferinde aynı sonuçları aldınız değil mi? Peki bir de tohumu değiştirip deneyin. Tohum ile birlikte rastgele sayılar değişir. Ancak her seferinde aynı sayılar gelecektir. Bunun sebebi rastgele sayıların gelme sırasının tohum nedeniyle aynı olmasıdır.

Daha iyi anlatabilmek üzere aşağıdaki kodu 2 kez çalıştırarak sonuçları kontrol edelim:

```python
import random

for i in range(5):
    print(random.randint(0,50))

""" Çıktı 1:
4
45
12
4
40
"""
""" Çıktı 2:
18
39
25
14
36
"""
```

`seed()` ile tohum belirleyelim ve tekrar 2 kez çalıştıralım:

```python
import random

random.seed(700)
for i in range(5):
    print(random.randint(0,50))

""" Çıktı 1:
10
12
28
44
13
"""
""" Çıktı 2:
10
12
28
44
13
"""
```

Şimdi farkı daha net anlamış olmalısınız. Bazen tutarlı sonuçlar elde etmek için her çalıştırıldığında rastgele sayıların aynı sırada olması isteyebiliriz. Bu durumlarda tohum belirlemek faydalı bir uygulamadır.

`sample()` ve `choices()` farkından bahsetmiştik lakin güzel bir örnek ile üzerinden geçelim. İlk olarak `sample()` fonksiyonuna bakalım:

```python
import random

rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
random.sample(rakamlar, 5)
random.sample(rakamlar, 15)

""" Çıktı:
[5, 7, 3, 6, 0]

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/enesbaspinar/anaconda3/lib/python3.8/random.py", line 363, in sample
    raise ValueError("Sample larger than population or is negative")
ValueError: Sample larger than population or is negative
"""
```

Gördüğümüz gibi eleman sayısından az öğe seçtiğimiz zaman sorunsuz çıktımızı üretti. Ancak 10 elemandan 15 rastgele seçim isteyince hatayı bastı. `choices()` kullanırsak bu hatayı almadığımızı görürüz:

```python
import random

rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
random.choices(rakamlar, k=5)
random.choices(rakamlar, k=15)

""" Çıktı:
[6, 0, 4, 1, 1]
[7, 8, 5, 9, 3, 4, 5, 1, 7, 8, 8, 5, 5, 6, 9]
"""
```

Son olarakta `getstate()` ve `setstate()` fonksiyonlarına değinmiş olalım:

```python
import random

print(random.random())
state = random.getstate()
print(random.random())
random.setstate(state)
print(random.random())

""" Çıktı:
0.9975605177874618
0.4304309039527011
0.4304309039527011
"""
```

Kodumuzu özetleyecek olursak, bir rastgele sayı yazdırdık. Sonrasında sonra rastgele olarak önümüze gelecek sayı listesinde kaldığımız konumunu kaydettik. Ve sonradan bir sayı daha yazdırdık. Ardından `setstate()` ile sayıyı yazdırmadan önce kaydettiğimiz konuma geri döndük. Böylece rastgele sayı listesinde bir sonra öğeyi yani aynı öğeyi bir daha yazdırmış olduk.

Yazımız burada bitti. Yeni yazılarda görüşmek üzere, esen kalın.

## Kullanılan Kaynaklar

[0] [http://ismailakbudak.com/blog/tr/rassal-sayi-uretecleri-uzerine-bir-not](http://ismailakbudak.com/blog/tr/rassal-sayi-uretecleri-uzerine-bir-not/)  
[1] [https://docs.python.org/3/library/random](https://docs.python.org/3/library/random.html)  
[2] [https://www.w3schools.com/python/module_random](https://www.w3schools.com/python/module_random.asp)
