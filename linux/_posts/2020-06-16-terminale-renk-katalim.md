---
layout: post
image: assets/img/card-img/linux.png
title: Terminale Biraz Renk Katalım
excerpt: "Ubuntu'nun varsayılan terminali bakınca sizinde içiniz kararmıyor mu? Bu yazıda, terminalimize biraz renk katacağız."
toc: true
---

<div class="copyright-alert">
Bu yazıda izlenilecek yöntem, <a href="https://twitter.com/rajaraodv"><b>Raja Rao DV</b></a>'nin Medium hesabında paylaştığı bir yazıdan alıntılanmıştır. Yazının orjinal haline <a href="https://medium.com/free-code-camp/jazz-up-your-bash-terminal-a-step-by-step-guide-with-pictures-80267554cb22" style="text-decoration: underline;"><b>buradan</b></a> ulaşabilirsiniz.
</div>

Ubuntu'nun varsayılan terminali bakınca sizinde içiniz kararmıyor mu? Bunu özellikle Git kullanırken farkettim. Baktığım video ve yazılardaki insanların, baktıkça Git kullanma hissi uyandıran terminalleri vardı. Sadece git için değil tabi normal kullanımda da içinizi açıyor. Neyse hadi terminalimize biraz renk katalım ve yazı sonunda bu terminali elde edelim:

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/001.png" alt="" style="display: block; margin: 0 auto;"/>

Harika değil mi? Ubuntu'nun varsayılan olarak gelen terminaline de bakalım:

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/002.png" alt="" style="display: block; margin: 0 auto;"/>

Değişim başlasın!

## Adım 1: Renk Şemasının Belirlenmesi  {#adim-1-renk-semasinin-belirlenmesi}

Önce renk şemamızı belirleyerek başlayalım. Bu kısımda, varsayılan olarak gelen ya da **[Gogh](https://mayccoll.github.io/Gogh/)** gibi platformlardan elde edebileceğimiz şemaları kullanabiliriz. Ben varsayılanlardan kullanacağım.

Kullanacağımız şemamızı belirleyip özelleştirelim. Benim ayarlamalarım "Built-in schemes" kısmı için Solarized Dark, yazı rengi olarak beyaz ve "Palette" kısmı için XTerm'i seçmek oldu:

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/004.png" alt="" style="display: block; margin: 0 auto;"/>

Kullanacağımız şemayı belirledik. "Default" profil olarak tanımlayabileceğiniz gibi yeni bir profil oluşturup onun üzerinden de yapılandırmayı yapabilirsiniz. Bu işlemlerden sonra terminal şu şekilde gözükmelidir:

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/005.png" alt="" style="display: block; margin: 0 auto;"/>

> Bu kısımda terminalinizde kullanıcı adınızın solunda **(base)** önekini görebilirsiniz. Bu, conda kurulumunuzdan gelen varsayılan sanal ortamdır. Yapacağımız işlemler açısından gerekmese de `conda deactivate` komutunu yazarak devredışı bırakabilirsiniz. Yapacağımız ayarlamalar sonrasında zaten bu önek gizlenecektir.

## Adım 2: Powerline Kurulumu {#adim-2-poweline-kurulumu}

Powerline bir Python (python is everywhere :)) uygulamasıdır terminaldeki satırlara durum  göstergesi ekler. Bazı ön gereklilikleri indirmemiz gerekir. Paketlerimizi indirmek için kullanacağımız pip paket yükleyicisini indirelim:

```bash
$ sudo apt install python3-pip
```

Ve pip'in yardımı ile powerline'ı kuralım:

```bash
$ pip3 install powerline-status
```

## Adım 3: Powerline Daemon'unun Bash'e Eklenmesi {#adim-3-poweline-daemonunun-bashe-eklenmesi}

Şimdi terminal her açıldığında terminalin sıfırlanmaması için Powerline daemon'u Bash dosyasına eklememiz gerekiyor. Bu komutu çalıştırarak kurulduğu yere bakalım:

```bash
$ pip3 show powerline-status
```

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/006.png" alt="" style="display: block; margin: 0 auto;"/>

Buradaki "Location" bilgisini kopyalayım. powerline'ı aktifleştirmek için `.bashrc_profile` dosyamızı açalım:

```bash
$ nano ~/.bashrc_profile
```

Alt kısımda paylaştığım kodlarda son satırda bulunan "BU KISMA YAPIŞTIR" alanını, terminalinizden aldığınız "Location" ile değiştirelim. Ve değiştirdikten sonra tamamını kopyalayıp CTRL+SHIFT+V ile `.bashrc_profile` dosyamızın **sonuna** ekleyelim. CTRL+O, ENTER ardından CTRL+X yaparak terminale dönelim.

```bash
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
. {BU KISMA YAPIŞTIR}/powerline/bindings/bash/powerline.sh
```

(Burada son satıra kendi bilginizi girdiğinizden emin olun!)

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/007.png" alt="" style="display: block; margin: 0 auto;"/>

Şimdi `.bashrc` dosyamızı açalım:

```bash
$ nano ~/.bashrc
```

Dosyanın sonuna şu ifadeyi ekleyelim (halihazırda varsa bir daha eklemenize gerek yok):

```bash
 . ~/.bashrc_profile
```

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/008.png" alt="" style="display: block; margin: 0 auto;"/>

Şimdi terminali kapatıp açtığımızda ekranımız şöyle olmalıdır:

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/009.png" alt="" style="display: block; margin: 0 auto;"/>

## Adım 4: Kullanılacak Fontun Kurulması {#adim-4-kullanilacak-fontun-kurulmasi}

Sonraki aşamalar herkeste aynı olduğundan kolay bir kurulum sağlamak için bir repo oluşturup içerisine dosyaları attım. <a href="https://github.com/baspinarenes/bash-tema-dosyalari">https://github.com/baspinarenes/bash-tema-dosyalari</a> reposuna gidip "Clone or Download" diyerek zip halinde indirelim.

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/010.png" alt="" style="display: block; margin: 0 auto;"/>

İndirdiğimiz zip doyasındakileri çıkartalım ve içindeki **Meslo LG L DZ Regular for Powerline.ttf** dosyasına çift tıklayalım. Ve **Install Font** butonu ile fontu bilgisayara yükleyelim.

Şimdi sıra bu fontu terminale eklemekte. Terminal ayarlarındaki **Text** sekmesinden **Custom font** butonuna tıklayarak **Meslo LG L DZ for Powerline Regular** fontunu seçelim. Font boyutunu istediğimiz boyuta ayarlayalım, 13 bana ideal gibi geldi. Ben bir de terminalin o gıcık sesini kapatıyorum bu size kalmış.

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/011.png" alt="" style="display: block; margin: 0 auto;"/>

Terminali kapatıp açtığımızda görüntü böyle olmalıdır:

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/012.png" alt="" style="display: block; margin: 0 auto;"/>

## Adım 5: Git Durum Göstergesinin Eklenmesi (Git Kullananlar İçin) {#git-durum-gostergesinin-eklenmesi}

Peki bu terminalde Git ile uğraşırken hangi daldayız, kaç dosya eklendi, kaçı commite hazır gibi oldukça kullanışlı bilgiler yazsa güzel olmaz mıydı? O zaman terminalimize bu özelliği ekleyelim. Öncelikle powerline eklentimizi indirelim:

```bash
$ pip3 install powerline-gitstatus
```

Powerline nerede kuruluydu hatırlayan var mı? Büyük ihtimalle yok, o halde bir daha bakalım ve "Location" bilgisini yeniden kopyalayalım:

```bash
$ pip3 show powerline-status
```

İndirdiğimiz zipi hatırlıyor muyuz? Klasöre girmek için şu komutu çalıştıralım:

```bash
$ cd ~/Downloads/bash-tema-dosyalari-master/
```

Şimdi ise Git'i eklediğimiz dosyaları bilgisayarımızda gereken konumlara kopyalayalım. Bunu yaparken aşağıdaki komutlarda gerekli yerlere "Location" bilgisini yapıştıralım:

```bash
$ cp default-colorscheme.json {BU KISMA YAPIŞTIR}/powerline/config_files/colorschemes/shell/default.json
# (Benim örneğimde: cp default-colorscheme.json /home/enesbaspinar/.local/lib/python3.8/site-packages/powerline/config_files/colorschemes/shell/default.json)

$ cp default-themes.json {BU KISMA YAPIŞTIR}/powerline/config_files/themes/shell/default.json
# (Benim örneğimde: cp default-themes.json /home/enesbaspinar/.local/lib/python3.8/site-packages/powerline/config_files/themes/shell/default.json)
```

Son olarak şu komutu çalıştıralım:

```bash
$ powerline-daemon --replace
```

Terminali yeniden başlattığımızda her şeyin hazır olduğunu görebiliriz :)

<img src="{{ site.baseurl }}/assets/img/posts/linux-posts/terminale-renk-katalim/013.png" alt="" style="display: block; margin: 0 auto;"/>
