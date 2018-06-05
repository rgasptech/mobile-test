//
//  RepositoryService.swift
//  RGA Mobile Test
//
//  Created by Gerlandio Da Silva Lucena on 26/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import Moya

enum Result<T> {
    case success(T)
    case error(String)
}

enum RepositoryService {
    case fetchContact()
}

extension RepositoryService: TargetType {
    
    var baseURL: URL{ return URL(string:"https://s3-sa-east-1.amazonaws.com/")! }
    
    var method: Moya.Method {
        switch self {
        case .fetchContact():
            return .get
        }
    }
    
    var path: String {
        switch self {
        case .fetchContact():
            return "rgasp-mobile-test/v1/content.json"
        }
    }
    
    var task: Task {
        switch self {
        case .fetchContact():
            return .requestParameters(parameters: [:], encoding: URLEncoding.queryString)
        }
    }
    
    var headers: [String : String]? {
        return ["Content-type": "application/json",
                "Accept"      : "application/json"]
    }
    
    var sampleData: Data {
        switch self {
        case .fetchContact():
            return "[{\"name\": \"Name Person1\",\"email\": \"person1@email.com\",\"born\": \"01/01/2015\",\"bio\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.\",\"photo\": \"https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo1.jpg\"}]".data(using: .utf8) ?? Data()
        }
    }
}
