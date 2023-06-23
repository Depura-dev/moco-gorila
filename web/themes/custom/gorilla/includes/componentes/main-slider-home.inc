<?php

/**
 * @file
 * Component - Main Slider.
 */

/**
 * Implements hook_preprocess_paragraph().
 */
function gorilla_preprocess_paragraph__main_slider_home(&$variables) {
  /** @var \Drupal\Core\Entity\EntityInterface[] */
  $slider_items = $variables['paragraph']->field_main_slider_home_item->referencedEntities();
  $variables['prep']['slides'] = _render_slider_items($slider_items);

  unset($variables['content']['field_main_slider_home_item']);
}

/**
 * Render slide items.
 *
 * @param array $slider_items
 *   Referenced Entity slides.
 */
function _render_slider_items(array $slider_items) {

  $lang_code = \Drupal::service('language_manager')->getCurrentLanguage()->getId();
  $slider_arr = [];

  foreach ($slider_items as $slider_item) {
    $slider_item = $slider_item->getTranslation($lang_code);

    /** @var \Drupal\Core\Field\FieldItemListInterface */
    
    $slider_arr[] = [
      'title' => $slider_item->field_msh_text_slider_title->view('full'),
      'description' => $slider_item->field_msh_descripcion->view('full'),
      'image' => $slider_item->field_msh_image->view('full'),
      'link' => $slider_item->field_msh_link->view('full'),
      'text_link' => $slider_item->field_msh_text_link->view('full'),
    ];
  }

  return $slider_arr;
}
