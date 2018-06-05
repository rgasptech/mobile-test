//
//  ContactListServiceImpl.swift
//  RGA Mobile Test
//
//  Created by Gerlandio Da Silva Lucena on 27/05/2018.
//  Copyright © 2018 GerlandioLucena. All rights reserved.
//

import UIKit
import Moya

typealias ContactRequestsCallbackFunction = (Result<[Contact]>) -> Void

class ContactListServiceImpl: NSObject {
    
    func fetchContacts(callback: @escaping ContactRequestsCallbackFunction) {
        let contactsProvider = MoyaProvider<RepositoryService>()
        
        contactsProvider.request(.fetchContact()) {(result) in
            switch result {
                case .success(let successResult):
                    do {
                        let jsonDecoder = JSONDecoder()
                        let contactsResponse = try jsonDecoder.decode([Contact].self, from: successResult.data)
                        callback(.success(contactsResponse))
                    } catch let error {
                        callback(.error(error.localizedDescription))
                    }
                case .failure(let error):
                    callback(.error(error.localizedDescription))
                }
        }
    }
}
