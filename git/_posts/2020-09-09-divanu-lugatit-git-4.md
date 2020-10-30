---
layout: post
image: assets/img/card-img/git.png
title: "Divanu Lügatit Git - 4 : Lokalin Derinlikleri"
excerpt: "Lokale kabaca baktık ama bu kadarcık yeterli değil. Bu yazıda, lokalde anlattığımız konuların bazılarını ayrı ayrı ele alacağız. Yaptığımız işlemleri görselleştirerek kafanızda netleştireceğiz, commit mesajının iskeletine bakacağız ve komutların bayraklarıyla birlikte ayrıntılarına değineceğiz."
toc: true
---

## Seri İçeriği {#seri-icerigi}

- [Divanu Lügatit Git - 0 : Seriye Giriş](/git/divanu-lugatit-git-0/) 
- [Divanu Lügatit Git - 1 : Versiyon Kontrol Sistemide Nesi?](/git/divanu-lugatit-git-1/)
- [Divanu Lügatit Git - 2 : Git ve GitHub Nedir?](/git/divanu-lugatit-git-2/)
- [Divanu Lügatit Git - 3 : Git ile Lokalde Takılmak](/git/divanu-lugatit-git-3/)
- <span style="font-weight: bold;">Divanu Lügatit Git - 4 : Lokalin Derinlikleri</span>

<br>
Lokale kabaca baktık ama bu kadarcık yeterli değil. Bu yazıda, lokalde anlattığımız konuların bazılarını ayrı ayrı ele alacağız. Yaptığımız işlemleri görselleştirerek kafanızda netleştireceğiz, *commit* mesajının iskeletine bakacağız ve komutların bayraklarıyla birlikte ayrıntılarına değineceğiz.

## Lokaldeki Çalışmayı Görselleştirelim {#lokaldeki-calismayi-gorsellestirelim}

Lokal kısımdaki dosyalarda değişiklik yapma, `git add` ile stage area'ya ekleme ve `git commit` ile repoya kaydetme işlemlerinin görsel olarak göstererek herkesin kafasına yerleşmesini sağlayalım.

Not: Udacity'deki [Version Control with Git](https://www.udacity.com/course/version-control-with-git--ud123) kursundan aldığım bu videoya elimden geldiğince Türkçe dublaj yapmaya çalıştım. Hafif peltekliğim için mazur görün :)

<iframe width="560" height="450" src="https://www.youtube.com/embed/9KpOf663_xg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="display: block; margin: 0 auto; width: 100%;" allowfullscreen></iframe><br>

## Komutların Farklı Kullanımları {#komutların-farkli-kullanimlari}

### git init {#git-init}

Bulunduğumuz klasör dışında bir klasöre git reposu tanımlayabiliriz. Eğer klasör yoksa öncesinde oluşturulur:

```bash
$(~) git init <directory>
#directory: git reposu tanımlayacağımız dizin
```

Bu komutun şablon parametresi bulunmaktadır. Örneğin her projemizde bazı temel dosyalarımızın bulunması gerekir. Tanımlarken önceden bir dizin belirleyip içerisine dosyalarımızı oluştururuz. Bu sayede her projede tek tek elle oluşturmaktansa direk olarak kopyalayabiliriz. Git reposu oluştururken bunu parametre olarak eklersek klasördeki her şeyi git projesine kopyalar:

```bash
$(~) git init --template= <template_directory>
#template_directory: şablon dosyaların alınacağı dizin
```

### git clone {#git-clone}

Bir repoyu kopyalarken farklı bir isim ile kaydedebiliriz:

```bash
$(~) git clone <repo> <directory>
#repo: github üzerinden kopyalayacağımız reponun linki
#directory: kopyalayacağımız isim
```

### git add {#git-add}

Çalışma dizininde yapılan değişiklikleri **stage area**'ya dosya dosya eklemek istersek dosyaların isimlerini tek tek verebiliriz:

```bash
$(~) git add <file1> <file2> ...
#file: **stage** edilecek dosya
```

Aynı zamanda klasör ismi vererek o klasörde bulunan tüm dosyaları da ekleyebiliriz:

```bash
$(~) git add <directory>
#directory: içindeki tüm dosyalar **stage** edilecek klasör
```

Önceden gördüğümüz "." ile tüm dosyaların eklenmesi yönteminde aslında o anda bulunduğumuz klasörü vermiş oluruz.

### git commit {#git-commit}

Bu komutu sade kullanırsak *staged* edilmiş dosyaları *commit*'e eklerken -a parametresi ile kullanırsak izlenen ve üzerinde değişiklikleri ekler:

```bash
$(~) git commit -a 
#directory: içindeki tüm dosyalar **stage** edilecek klasör
```

Bildiğimiz gibi *commit* mesajını -m parametresi yardımıyla ekleyebiliyorduk. Bunu -a parametresiyle birlikte kullanabiliriz:

```bash
$(~) git commit -am "commit message" 
#directory: içindeki tüm dosyalar **stage** edilecek klasör
```

## Gelişmiş Commit Mesajları {#gelismis-commit-mesajlari}

*commit* mesajlarınıdan bahsetmiştik. Birkaç püf noktası var tabi bu mesajları seçerken kullanacağımız. Önce ona bakalım sonrasında 
şuan için fazla detaya kaçan, ancak fikir sahibi olmanın işimize yarayacağı mesaj yapısı hakkında bilgi edineceğiz. Proje büyük çaplı değilse genelde sadece başlığı yazarız.

### Püf Noktaları {#puf-noktalari}

Öncelikle güzel *commit* mesajı diyince ne anlamalıyız? Önerilen bazı maddeler ile bunları açıklayalım:
- 60 karakterden az karakter kullan
- *commit*'in ne yaptığını açıkla (nasıl ve neden olduğunu değil)
- *commit*'lerin içeriğini mesajda "ve" kullanmak zorunda kalmayacak şekilde tutmalıyız

### Yapısı {#yapisi}

 Bir *commit* mesajı, boş bir satırla ayrılmış üç farklı bölümden oluşur: başlık, isteğe bağlı gövde ve isteğe bağlı altbilgi. Düzen şuna benzer: 
 - başlık: *commit* mesajının iyi bir özetidir.
 - gövde: *commit*'in her detayını içeren mesajdır.
 - altbilgi: *commit*'i tanımlayan benzersiz numaraları yazarız.

## Varolan Bir Repoyu Klonlama {#varolan-bir-repoyu-klonlama}

Örnek olarak "Terminale Biraz Renk Katalım" yazımda kullandığım repoyu Github sunucusundan bilgisayarıma kopyalayacağım. Repoyu kopyalamak için `git clone` komutunu kullanacağım:

```bash
$(~) git clone https://github.com/baspinarenes/bash-tema-dosyalari
```

Bu, komutu kullandığımız yerde aynı isimde bir klasör oluşturur. Dosyalarla birlikte git reposunu da kopyalayacağı için proje geçmişine erişebiliriz.

Aynı zamanda bilgisayarımızda yer alan bir git projesini de kopyalayabiliriz. Bunun için link yerine dosyamızın yolunu gireriz:

```bash
$(~) git clone bash-tema-dosyalari/ yeni-proje/
```

`git clone` kullanarak uzak repodan indirdiğimiz projeyi bu seferde bilgisayırımızda başka bir proje olarak klonladık.

## Commit'e Etiket Atama  {#commite-etiket-atama}

`git tag` komutu, bazı *commit*'lere isim vermemizi sağlar. Örneğin projemizde belirli bir aşama kaydettik ve ilk versiyonunu çıkarmaya hazırız. Bu yüzden bu *commit*'in bizim için önemli bir anlamı var. O yüzden kolay erişebilmek için etiket atayalım:

```bash
$(~) git tag -a v1.0
#-a: açıklamalı bir etiket oluşturmamızı sağlar
```

<figure style="margin-bottom: 80px;">
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-4/001.png" alt="Yerel versiyon kontrol şeması" style="margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="{{ site.baseurl }}/linux/terminale-renk-katalim/" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure>

Bu komutu girdiğinizde editör açılır ve sizden etiket için açıklama ister. Bu açıklamayı -m parametresi kullanarak kolayca girebiliriz:

```bash
$(~) git tag -a v1.4 -m "my version 1.4"
#-m: etiket için açıklama girmemizi sağlar
```

Sonrasında bu etiketi silmek istersek -d parametresini kullanabiliriz:

```bash
$(~) git tag -d v1.0
#-d: etiketi kaldırır
```

Önceki bir *commit*'e etiket atamak istiyorsak ilgili *commit*'in SHA'ını parametre olarak verebiliriz:


```bash
$(~) git tag v1.0 a87984
```

Önceki etiketleri listelemek için komutu yanına bir şey eklemeden yazabiliriz:

```bash
$(~) git tag
```

## Git'e İzlemesini İstemediğimiz Dosyaları Söyleme  {#gite-izlemesini-istemediğimiz-dosyalari-soyleme}

`git add` komutuyla ".", "*" gibi karakterler kullandığımızda bildiğimiz gibi tüm dosyaları ekleyecektir. Bazı durumlarda proje boyunca *git*'in izlemesini istemediğimiz dosyalar olabilir. `git add` komutunu kullandığımızda bunları göz ardı etmesi gerektiğini *git*'e bildirmek için `.gitignore` isimli özel bir dosya kullanırız (bu dosya *.git* ile aynı klasörde bulunmalıdır, içerisinde DEĞİL!). Yazdıklarımız görmezden gelinecektir.

*.gitignore* dosyasına farklı yollarla dosyaları bildirebiliriz:
- dosyalarımızın isimlerini satır satır yazabiliriz:

```
resim.jpg
```

- bir dosya türüne ait dosyaların tamamını engellemek için * kullanabiliriz:

```
*.jpg
```

- dosya ismi girdiğimizde altındaki tüm dosyalar görmezden gelinir:

```
ignore_folder
```
Bu bilgileri kullanarak kendi .gitignore dosyalarımızı oluşturabiliriz. Ancak kullandığımız yazılım diline ve platforma göre hazırlanmış .gitignore dosyaları elde edebileceğimiz güzel bir siteden bahsedeceğim. Sitemiz: <a href="https://www.toptal.com/developers/gitignore" style="text-decoration: underline;">toptal.com/developers/gitignore</a>

Örnek olarak Visual Studio üzerinden Python yazdığımızı düşünelim. Arama kısmına ikisini de giriyorum:

<img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-4/002.png" alt="lokalde-takiliyoruz.gif" style="display: block; margin-left: auto; margin-right: auto;"/>

Ardından aramaya tıkladığımda karşıma dosyam gelecektir. Bu şekilde gereksiz dosyaların git tarafından takip edilmesini önleyen .gitignore dosyalarını elde edebiliriz. Verdiği dosyaya göz atacak olursak:

```

# Created by https://www.toptal.com/developers/gitignore/api/visualstudiocode,python
# Edit at https://www.toptal.com/developers/gitignore?templates=visualstudiocode,python

### Python ###
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
pip-wheel-metadata/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

...

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace

### VisualStudioCode Patch ###
# Ignore all local history of files
.history

# End of https://www.toptal.com/developers/gitignore/api/visualstudiocode,python
```

## Yapılan Değişiklileri İnceleme  {#yapilan-degisiklikleri-inceleme}

<figure style="margin-bottom: 80px;">
    <img src="{{ site.baseurl }}/assets/img/posts/git-posts/divanu-lugatit-git-4/003.png" alt="Yerel versiyon kontrol şeması" style="margin-bottom: 10px;" />
    <figcaption style="text-align: center;"><a href="https://i.stack.imgur.com/tVHYO.png" style="font-size: 16px; text-decoration: underline;">kaynak</a></figcaption>
</figure>

Son yaptığımız commit'ten sonra yaptığımız tüm değişiklikleri görmek için `git diff` komutunu kullanabiliriz:

```bash
$(~) git diff
```

Örnek bir çıktı uyduralım ve bunu yorumlayalım:

```bash
diff --git a/deneme.txt b/deneme.txt
# farkı alınacak kaynaklarını gösterir.
index 6b0c6cf..b37e70a 100644
# önemli bir şey değil.
--- a/deneme.txt
+++ b/deneme.txt
# bu satırlar her bir diff girdi kaynağına atanan sembolleri gösterir.
# bu durumda, a/deneme.txt'den gelen değişiklikler bir --- ile, b/deneme.txt'den gelen değişiklikler +++ simgesiyle işaretlenir.
@@ -34,1 +34,2 @@
-bu eski satır
+bu 1. yeni satır
+bu 2. yeni satır
# bu kısımdan sonrası dosyaların yalnızca değişikliklerin olduğu bölümlerini görüntüler. 
# @@ ile başlayan satır dosyada yapılan değişikliklerin bir özetidir. 
# 34. satırdan başlayarak 6 satır çıkarılmıştır ve yine 34. satırdan başlayarak 8 satır eklenmiştir.
```

Aynı zamanda son *commit*'ten sonra *stage area*'ya eklenen değişiklikleri görmek için de *--staged* veya *--cached* bayrağını kullanabiliriz:

```bash
$(~) git diff --staged 
# ya da git diff --cached
```
