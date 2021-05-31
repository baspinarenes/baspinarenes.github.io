---
layout: post
title: Git Öğrenim Kaynakları
tag: [resource, guide, cheatsheet]
---

"İnternette artık her konuda bir sürü kaynak var." sözünü sürekli duyuyoruz. Ancak nitelikli kaynakları erişmekte her
zaman kolay olmuyor veyahut bazılarına denk gelemeyebiliyoruz. Bu yazıda bulduğum en iyi kaynakları sizinle paylaşacağım
ve kendi bitirdiklerimi de burada kaydediyor olacağım. Yazı elbette sürekli güncelleniyor, söylemeyi sevdiğim şekilde
"yaşayan" bir yazı, olacak.

{% for category in site.data.git-resources %}

<h2>{{ category.title }}</h2>

---

<ul class="resources">
    {% for resource in category.resources %}
        <li class="resource d-flex flex-column justify-content-between">
            <a href="{{ resource.link }}">
            <img src="/assets/img/git-resources/{{ resource.img }}" alt="">
            </a>
            <a class="link" style="margin: 8px;" href="{{ resource.link }}">{{ resource.name }}</a>
        </li>
    {% endfor %}
</ul>
{% endfor %}