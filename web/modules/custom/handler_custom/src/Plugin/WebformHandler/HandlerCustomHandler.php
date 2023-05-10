<?php
namespace Drupal\handler_custom\Plugin\WebformHandler;

use Drupal\Core\Form\FormStateInterface;
use Drupal\webform\Plugin\WebformHandlerBase;
use Drupal\webform\WebformSubmissionInterface;


/**
 * Webform Date Validation handler.
 *
 * @WebformHandler(
 *   id = "handler_custom",
 *   label = @Translation("Handler for Moco of Gorila"),
 *   category = @Translation("Custom"),
 *   description = @Translation("Custom Handler Moco of Gorila."),
 *   cardinality = \Drupal\webform\Plugin\WebformHandlerInterface::CARDINALITY_UNLIMITED,
 *   results = \Drupal\webform\Plugin\WebformHandlerInterface::RESULTS_PROCESSED,
 *   submission = \Drupal\webform\Plugin\WebformHandlerInterface::SUBMISSION_OPTIONAL,
 * )
 */
class HandlerCustomHandler extends WebformHandlerBase {

    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state, WebformSubmissionInterface $webform_submission) {

        parent::validateForm($form, $form_state, $webform_submission);

        if (!$form_state->hasAnyErrors()) {
            //Tu validación aquí
        }
    }

    /**
     * {@inheritdoc}
     */
    
    public function submitForm(array &$form, FormStateInterface $form_state, WebformSubmissionInterface $webform_submission) {

        if (!$form_state->hasAnyErrors()) {
            //Tu logica despues del submit
          $results_quiz = $webform_submission->getData();

          $ultimapregunta = 0;

          $punk = 0;
          $galan = 0;
          $rockstar = 0;
          $gamer = 0;

          foreach($results_quiz as $item_quiz=>$value) {
              switch ($item_quiz) {
                  case 'wf_gorillas':
                        switch($value){
                          case 'rockstar':
                            $rockstar = $rockstar + 1;
                          break;
                          case 'galan':
                            $galan = $galan + 1;
                          break;
                          case 'gamer':
                            $gamer = $gamer + 1;
                          break;
                          case 'punk':
                            $punk = $punk + 1;
                          break;
                        }
                      break;
                  case 'wf_class_school':
                        switch($value){
                          case 'rockstar':
                            $rockstar = $rockstar + 1;
                          break;
                          case 'galan':
                            $galan = $galan + 1;
                          break;
                          case 'gamer':
                            $gamer = $gamer + 1;
                          break;
                          case 'punk':
                            $punk = $punk + 1;
                          break;
                        }
                      break;
                  case 'wf_party':
                        switch($value){
                          case 'rockstar':
                            $rockstar = $rockstar + 1;
                          break;
                          case 'galan':
                            $galan = $galan + 1;
                          break;
                          case 'gamer':
                            $gamer = $gamer + 1;
                          break;
                          case 'punk':
                            $punk = $punk + 1;
                          break;
                        }
                      break;
                  case 'wf_music':
                        switch($value){
                          case 'rockstar':
                            $rockstar = $rockstar + 1;
                          break;
                          case 'galan':
                            $galan = $galan + 1;
                          break;
                          case 'gamer':
                            $gamer = $gamer + 1;
                          break;
                          case 'punk':
                            $punk = $punk + 1;
                          break;
                        }
                      break;
                    case 'wf_favorite_date':
                          switch($value){
                            case 'rockstar':
                              $rockstar = $rockstar + 1;
                            break;
                            case 'galan':
                              $galan = $galan + 1;
                            break;
                            case 'gamer':
                              $gamer = $gamer + 1;
                            break;
                            case 'punk':
                              $punk = $punk + 1;
                            break;
                          }
                        break;
                      case 'wf_friends':
                            switch($value){
                              case 'rockstar':
                                $rockstar = $rockstar + 1;
                              break;
                              case 'galan':
                                $galan = $galan + 1;
                              break;
                              case 'gamer':
                                $gamer = $gamer + 1;
                              break;
                              case 'punk':
                                $punk = $punk + 1;
                              break;
                              case 'rockstar_2':
                                $rockstar = $rockstar + 1;
                              break;
                              case 'galan_2':
                                $galan = $galan + 1;
                              break;
                              case 'gamer_2':
                                $gamer = $gamer + 1;
                              break;
                              case 'punk_2':
                                $punk = $punk + 1;
                              break;
                            }
                          break;
                      case 'wf_friday':
                            switch($value){
                              case 'rockstar':
                                $rockstar = $rockstar + 1;
                              break;
                              case 'galan':
                                $galan = $galan + 1;
                              break;
                              case 'gamer':
                                $gamer = $gamer + 1;
                              break;
                              case 'punk':
                                $punk = $punk + 1;
                              break;
                            }
                          break;
                      case 'wf_hair':
                            switch($value){
                              case 'rockstar':
                                $rockstar = $rockstar + 1;
                              break;
                              case 'galan':
                                $galan = $galan + 1;
                              break;
                              case 'gamer':
                                $gamer = $gamer + 1;
                              break;
                              case 'punk':
                                $punk = $punk + 1;
                              break;
                            }
                          break;
                      case 'wf_sport':
                            switch($value){
                              case 'rockstar':
                                $rockstar = $rockstar + 1;
                              break;
                              case 'galan':
                                $galan = $galan + 1;
                              break;
                              case 'gamer':
                                $gamer = $gamer + 1;
                              break;
                              case 'punk':
                                $punk = $punk + 1;
                              break;
                            }
                          break;
                      case 'wf_closet':
                            switch($value){
                              case 'rockstar':
                                $rockstar = $rockstar + 1;
                              break;
                              case 'galan':
                                $galan = $galan + 1;
                              break;
                              case 'gamer':
                                $gamer = $gamer + 1;
                              break;
                              case 'punk':
                                $punk = $punk + 1;
                              break;
                            }
                          break;
                        case 'wf_social':
                              switch($value){
                                case 'rockstar':
                                  $rockstar = $rockstar + 1;
                                break;
                                case 'galan':
                                  $galan = $galan + 1;
                                break;
                                case 'gamer':
                                  $gamer = $gamer + 1;
                                break;
                                case 'punk':
                                  $punk = $punk + 1;
                                break;
                              }
                            break;
                        case 'wf_see_friends':
                              switch($value){
                                case 'rockstar':
                                  $rockstar = $rockstar + 1;
                                break;
                                case 'galan':
                                  $galan = $galan + 1;
                                break;
                                case 'gamer':
                                  $gamer = $gamer + 1;
                                break;
                                case 'punk':
                                  $punk = $punk + 1;
                                break;
                              }
                            break;
                        case 'wf_word_define':
                              switch($value){
                                case 'rockstar':
                                  $rockstar = $rockstar + 1;
                                  $ultimapregunta = 1;
                                break;
                                case 'galan':
                                  $galan = $galan + 1;
                                  $ultimapregunta = 1;
                                break;
                                case 'gamer':
                                  $gamer = $gamer + 1;
                                  $ultimapregunta = 1;
                                break;
                                case 'punk':
                                  $punk = $punk + 1;
                                  $ultimapregunta = 1;
                                break;
                              }
                            break;
              }
          }
          // cierre Foreach resultados quiz

          //Calcular el resultado mayor

          $resultados_q = array("rockstar" => $rockstar, "galan" =>$galan, "gamer" => $gamer, "punk" => $punk);

          $top_results = array_search(max($resultados_q),$resultados_q);
         
          $url = \Drupal\Core\Url::fromUserInput('/', ['absolute' => TRUE])->toString();

          if($ultimapregunta === 1){

            switch($top_results){
              case 'rockstar':
                  sleep(5);
                  header("Location: ".$url."/rockstar");
                  die();
                break;
              case 'galan':
                  sleep(5);
                  header("Location: ".$url."/galan");
                  die();
                break;
              case 'gamer':
                  sleep(5);
                  header("Location: ".$url."/gamer");
                  die();
                break;
              case 'punk':
                  sleep(5);
                  header("Location: ".$url."/punk");
                  die();
                break;
            }

          }
          //condicional fin ultima pregunta

        }
    }

}