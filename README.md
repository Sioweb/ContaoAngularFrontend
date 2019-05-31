# Angular im Contao Frontend

Dies ist ein einfacher Prototyp wie ich mir Angular & Contao vorstelle. Alle Module & Templates müssten natürlich ausgetauscht werden. Dieses Modul benötigt aktuell zwingend [diese Version](https://github.com/Sioweb/contao-content-api-bundle) der [Die Schittigs-Api](https://github.com/DieSchittigs/contao-content-api-bundle).

## Installation

Konsole im Root von Contao öffnen: `git clone https://github.com/Sioweb/ContaoAngularFrontend angular` 

## FE_PAGE

Ein Template `fe_angular.html5` anlegen und folgendes hinterlegen:

```php
<!doctype html>
<html lang="<?= $this->language ?>"<?php if ($this->isRTL): ?> dir="rtl"<?php endif; ?>>
<head>
  <?php $this->block('head'); ?>
    <meta charset="<?= $this->charset ?>">
    <title><?= $this->title ?></title>
    <base href="<?= $this->base ?>">

    <?php $this->block('meta'); ?>
      <meta name="robots" content="<?= $this->robots ?>">
      <meta name="description" content="<?= $this->description ?>">
      <meta name="generator" content="Contao Open Source CMS">
    <?php $this->endblock(); ?>

    <?= $this->viewport ?>
    <?= $this->framework ?>
    <?= $this->stylesheets ?>
    <?= $this->mooScripts ?>
    <?= $this->head ?>

    <?php $this->block('html5shiv'); ?>
      <!--[if lt IE 9]><script src="<?= $this->asset('js/html5shiv-printshiv.min.js', 'contao-components/html5shiv') ?>"></script><![endif]-->
    <?php $this->endblock(); ?>
  <?php $this->endblock(); ?>

</head>
<body id="top" class="{{ua::class}}<?php if ($this->class) echo ' ' . $this->class; ?>"<?php if ($this->onload): ?> onload="<?= $this->onload ?>"<?php endif; ?> itemscope itemtype="http://schema.org/WebPage">
  <app-root></app-root>
  <script type="text/javascript" src="runtime.js"></script><script type="text/javascript" src="es2015-polyfills.js" nomodule></script><script type="text/javascript" src="polyfills.js"></script><script type="text/javascript" src="styles.js"></script><script type="text/javascript" src="vendor.js"></script><script type="text/javascript" src="main.js"></script></body>
</html>
```
