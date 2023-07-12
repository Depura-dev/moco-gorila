<?php

/**
 * @file
 * Component - Main Slider.
 */

/**
 * Implements hook_preprocess_paragraph().
 */
function gorilla_preprocess_paragraph__main_slider(&$variables) {
  /** @var \Drupal\Core\Entity\EntityInterface[] */
  $slider_items = $variables['paragraph']->field_ms_items->referencedEntities();
  $variables['prep']['slides'] = _render_slider_items($slider_items);

  unset($variables['content']['field_ms_items']);
}

// /**
//  * Render slide items.
//  *
//  * @param array $slider_items
//  *   Referenced Entity slides.
//  */
function _render_slider_items(array $slider_items) {

  $lang_code = \Drupal::service('language_manager')->getCurrentLanguage()->getId();

  $slider_arr = [];

  foreach ($slider_items as $slider_item) {
    $slider_item = $slider_item->getTranslation($lang_code);
    /** @var \Drupal\Core\Field\FieldItemListInterface */

    $slider_arr[] = [
      'color-identity' => $slider_item->field_color_identity->view('full'),
      'image' => $slider_item->field_msh_image->view('full'),
      'link' => $slider_item->field_msh_link->view('full'),
      'text' => $slider_item->field_ms_text->view('full'),
      'title' => $slider_item->field_ms_title->view('full'),
    ];
  }

  return $slider_arr;
}
