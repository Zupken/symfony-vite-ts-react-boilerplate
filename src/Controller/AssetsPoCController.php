<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AssetsPoCController extends AbstractController {
    #[Route('/assets-poc', name: 'app_assets_poc')]
    public function index(): Response {
        return $this->render('assets_poc/index.html.twig');
    }
}
