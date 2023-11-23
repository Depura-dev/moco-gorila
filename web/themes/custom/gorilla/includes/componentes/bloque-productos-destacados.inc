<?php

/**
 * @file
 * Component - Producto destacados bloque.
 */

/**
 * Implements hook_preprocess_paragraph().
 */
function gorilla_preprocess_paragraph__productos_destacados_bloque(&$variables) {
  /** @var \Drupal\Core\Entity\EntityInterface[] */
  $products_items = $variables['paragraph']->field_producto_destacado->referencedEntities();
  $variables['prep']['product'] = _render_product_items($products_items);

  unset($variables['content']['field_producto_destacado']);
}
/**
 * render product items
 *
 * @param array  $products_items
 *   Referenced Entity products.
 */

function _render_product_items(array  $products_items) {

  $lang_code = \Drupal::service('language_manager')->getCurrentLanguage()->getId();
  $product_arr = [];

  foreach ($products_items as $product_item) {
    $product_item = $product_item->getTranslation($lang_code);

    /** @var \Drupal\Core\Field\FieldItemListInterface */

    $product_arr[] = [
      'color_identity' => $product_item->field_color_identity->view('full'),
      'image' => $product_item->field_imagen_de_producto_destaca->view('full'),
      'title' => $product_item->field_titulo_de_producto_destaca->view('full'),
    ];

  }

  return $product_arr;
}


