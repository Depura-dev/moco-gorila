<?php

/**
 * @file
 * Component - Main Slider-home.
 */

/**
 * Implements hook_preprocess_paragraph().
 */
function gorilla_preprocess_paragraph__main_slider_home(&$variables) {
  /** @var \Drupal\Core\Entity\EntityInterface[] */
  $slider_home_items = $variables['paragraph']->field_main_slider_home_item->referencedEntities();
  $variables['prep']['slides'] = _render_slider_home_items($slider_home_items);

  unset($variables['content']['field_main_slider_home_item']);
}

/**
 * Render slide items.
 *
 * @param array $slider_items
 *   Referenced Entity slides.
 */
function _render_slider_home_items(array $slider_home_items) {

  $lang_code = \Drupal::service('language_manager')->getCurrentLanguage()->getId();
  $slider_arr = [];

  foreach ($slider_home_items as $slider_home_item) {
    $slider_home_item = $slider_home_item->getTranslation($lang_code);

    /** @var \Drupal\Core\Field\FieldItemListInterface */

    $slider_arr[] = [
      'color_identity' => $slider_home_item->field_color_identity->view('full'),
      'title' => $slider_home_item->field_msh_text_slider_title->view('full'),
      'description' => $slider_home_item->field_msh_descripcion->view('full'),
      'image' => $slider_home_item->field_msh_image->view('full'),
      'link' => $slider_home_item->field_msh_link->view('full'),
      'text_link' => $slider_home_item->field_msh_text_link->view('full'),
    ];
  }

  return $slider_arr;
}
