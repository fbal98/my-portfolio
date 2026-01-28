#!/bin/bash

# Array of screen names
screens=(
  "01-splash-screen"
  "02-vendor-directory-home"
  "03-vendor-directory-empty"
  "04-vendor-directory-loading"
  "05-vendor-products"
  "06-product-detail"
  "07-cart"
  "08-empty-cart"
  "09-checkout"
  "10-order-confirmation"
  "11-order-history"
  "12-order-history-loading"
  "13-empty-order-history"
  "14-order-detail"
  "15-account"
  "16-auth-login-signup"
  "17-auth-password-reset"
  "18-search-results"
  "19-search-no-results"
  "20-clear-cart-prompt"
  "21-payment-failure"
  "22-edit-profile"
  "23-privacy-policy"
  "24-vendor-products-empty"
  "25-vendor-products-loading"
  "26-product-out-of-stock"
  "27-product-error"
  "28-checkout-redirecting"
  "29-checkout-pending"
  "30-network-error"
  "31-terms-conditions"
)

output_dir="/Users/fbal98/Documents/personal/projects/my-portfolio/public/images/snippet-projects/era"

for i in "${!screens[@]}"; do
  echo "Capturing screen $i: ${screens[$i]}"

  # Scroll to mockup
  agent-browser eval "document.querySelectorAll('.mobile-mockup')[$i].scrollIntoView({block: 'center', behavior: 'instant'}); true"

  # Wait a bit for scroll
  sleep 0.5

  # Take screenshot of the specific mockup
  agent-browser eval "
    const mockup = document.querySelectorAll('.mobile-mockup')[$i];
    mockup.style.border = '2px solid red';
    true
  "

  agent-browser screenshot "$output_dir/${screens[$i]}.png"

  echo "Saved: ${screens[$i]}.png"
done

echo "All screenshots captured!"
