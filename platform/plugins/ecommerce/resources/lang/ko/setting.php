<?php

return [
    'general' => [
        'name' => '일반 설정',
        'description' => '일반 이커머스 설정',
    ],
    'currency' => [
        'name' => '통화',
        'description' => '통화 설정 보기 및 업데이트',
        'currency_setting_description' => '웹사이트에서 사용되는 통화 보기 및 업데이트',
        'form' => [
            'enable_auto_detect_visitor_currency' => '방문자 통화 자동 감지 활성화',
            'enable_auto_detect_visitor_currency_helper' => '방문자의 위치를 기반으로 자동으로 현지 통화를 감지하고 가격을 표시합니다. 이는 더 개인화된 쇼핑 경험을 제공합니다.',
            'add_space_between_price_and_currency' => '가격과 통화 사이에 공백 추가',
            'add_space_between_price_and_currency_helper' => '활성화하면 가격 값과 통화 기호 사이에 공백을 추가합니다 (예: "100USD" 대신 "100 USD").',
            'thousands_separator' => '천 단위 구분자',
            'thousands_separator_helper' => '가격 표시에서 천 단위를 구분할 문자를 선택하세요 (예: 1,000 또는 1.000 또는 1 000).',
            'decimal_separator' => '소수점 구분자',
            'decimal_separator_helper' => '가격에서 소수점 값을 구분할 문자를 선택하세요 (예: 10.99 또는 10,99).',
            'separator_period' => '마침표 (.)',
            'separator_comma' => '쉼표 (,)',
            'separator_space' => '공백 ( )',
            'api_key' => 'API 환율 키',
            'api_key_helper' => ':link에서 환율 API 키를 받으세요',
            'update_currency_rates' => '환율 업데이트',
            'use_exchange_rate_from_api' => 'API에서 환율 사용',
            'use_exchange_rate_from_api_helper' => '구성된 API 제공자로부터 자동 환율 업데이트를 활성화합니다. 이를 통해 가격이 항상 현재 시장 환율로 최신 상태를 유지합니다.',
            'clear_cache_rates' => '캐시 환율 지우기',
            'auto_detect_visitor_currency_description' => '브라우저 언어를 기반으로 방문자 통화를 감지합니다. 기본 통화 선택을 덮어씁니다.',
            'exchange_rate' => [
                'api_provider' => 'API 제공자',
                'select' => '-- 선택 --',
                'none' => '없음',
                'provider' => [
                    'api_layer' => 'API Layer',
                    'open_exchange_rate' => 'Open Exchange Rates',
                ],
                'open_exchange_app_id' => 'Open Exchange Rates 앱 ID',
            ],
            'default_currency_warning' => '기본 통화의 경우 환율은 1이어야 합니다.',
        ],
    ],
    'checkout' => [
        'name' => '결제 설정',
        'description' => '결제 프로세스 설정',
    ],
    'product' => [
        'name' => '제품 설정',
        'description' => '제품 관련 설정',
    ],
    'shopping' => [
        'name' => '쇼핑 설정',
        'description' => '쇼핑 경험 설정',
        'form' => [
            'payment_proof_payment_methods' => '결제 증명이 필요한 결제 방법',
            'payment_proof_payment_methods_helper' => '고객이 결제 증명을 업로드할 수 있도록 허용할 결제 방법을 선택하십시오. 일반적으로 착불 및 은행 송금과 같은 수동 결제 방법에 사용됩니다.',
        ],
        'recently_viewed' => [],
    ],
    'invoice' => [
        'name' => '송장 설정',
        'description' => '송장 관련 설정',
    ],
    'return' => [
        'name' => '반품 설정',
        'description' => '제품 반품 관련 설정',
    ],
];
