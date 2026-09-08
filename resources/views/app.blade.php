<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- FAVICON BARU (Ganti dengan file yang ada di folder public) -->
        <link rel="icon" type="image/png" href="/favicon.png" />
        <!-- Atau jika formatnya .ico -->
        <!-- <link rel="icon" href="/favicon.ico" /> -->

        <!-- Fonts & Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>