<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CheckoutController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'instagramAccessToken' => config('services.instagram.access_token'),
    ]);
});

Route::get('/coming', function () {
    return Inertia::render('ComingSoon');
});

Route::get('/privacy', function () {
    return Inertia::render('Privacy');
});

Route::get('/terms', function () {
    return Inertia::render('Service');
});
