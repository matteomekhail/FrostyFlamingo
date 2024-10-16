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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/create-checkout-session', [CheckoutController::class, 'createCheckoutSession'])->withoutMiddleware(['web']);

Route::get('/checkout/success', [CheckoutController::class, 'success'])->name('checkout.success');
Route::get('/purchase/confirmation', function () {
    return view('purchase.confirmation');
})->name('purchase.confirmation');
Route::get('/purchase/error', function () {
    return view('purchase.error');
})->name('purchase.error');

Route::get('/checkout/cancel', [CheckoutController::class, 'cancel'])->name('checkout.cancel');

require __DIR__ . '/auth.php';
