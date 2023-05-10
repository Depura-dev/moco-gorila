<?php

/**
 * @file
 * Node and Taxonomy bundle.
 */

use Drupal\node\NodeInterface;
use Drupal\file\Entity\File;
use Drupal\media\Entity\Media;

/**
 * Implements hook_preprocess_HOOK() for HTML document templates.
 *
 * Add body classes if certain regions have content.
 */
function gorilla_preprocess_html(&$variables) {
 
  //Add styles class language
  if ($node = \Drupal::request()->attributes->get('node')) {
    $variables['attributes']['class'][] = 'page-node-' . $node->id();
  }
  $variables['attributes']['class'][] = \Drupal::languageManager()->getCurrentLanguage()->getId()."-language";
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Adds template suggestions.
 */
function gorilla_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  // Add content type suggestions.
  if ($node = \Drupal::request()->attributes->get('node')) {
    if ($node instanceof NodeInterface) {
      array_splice($suggestions, 1, 0, 'page__type__' . $node->getType());
    }
  }

}

/**
 * Implements hook_preprocess_node().
 */
function gorilla_preprocess_node(&$variables) {
  $node = $variables['node'];
  
  $options = [
    'absolute' => TRUE,
  ];
  $variables['full_url'] = $node->toUrl()->setAbsolute()->toString();

  if($node->hasField('field_media_result_page')){
    $video_uri = $node->field_media_result_page->entity->field_media_video_file->entity->getFileUri();
    $file_url = \Drupal::service('file_url_generator')->generateAbsoluteString($video_uri);
    $variables['project_video_url'] = $file_url;
  }

}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Add views unformatted template suggestions.
 *
 * @inheritdoc
 */
function gorilla_theme_suggestions_views_view_unformatted_alter(array &$suggestions, array $variables) {
  return [
    'views_view_unformatted__' . $variables['view']->id(),
  ];
}
