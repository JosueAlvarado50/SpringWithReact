package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.dto.ClientDto;
import com.SpringAndReact.SyRFullStack.entity.Client;
import com.SpringAndReact.SyRFullStack.exception.ResourceNotFoundException;
import com.SpringAndReact.SyRFullStack.repository.ClientRepository;
import com.SpringAndReact.SyRFullStack.service.ClientService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ClientServiceImpl implements ClientService {
    ClientRepository clientRepository;
    private ModelMapper modelMapper;

    @Override
    public ClientDto addClient(ClientDto clientDto) {

        Client client = modelMapper.map(clientDto, Client.class);
        Client savedClient = clientRepository.save(client);
        return modelMapper.map(savedClient, ClientDto.class);
    }

    @Override
    public ClientDto getClientById(Long clientId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Client Not found:" + clientId)
                );
        return modelMapper.map(client, ClientDto.class);
    }

    @Override
    public List<ClientDto> getAllClients() {
        List<Client> clientList = clientRepository.findAll();
        return clientList.stream()
                .map((client) -> modelMapper
                        .map(client, ClientDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public ClientDto updateClient(Long clientId, ClientDto updatedClient) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Client not found: "+clientId)
                );
        client.setName(updatedClient.getName());
        client.setPhoneNumber(updatedClient.getPhoneNumber());
        client.setStreet(updatedClient.getStreet());
        client.setPostalCode(updatedClient.getPostalCode());
        client.setCity(updatedClient.getCity());
        clientRepository.save(client);
        return modelMapper.map(client, ClientDto.class);
    }

    @Override
    public void deleteClient(Long clientId) {
        Client clientToDelete = clientRepository.findById(clientId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Client not found")
                );
        clientRepository.deleteById(clientId);
        System.out.println("Client deleted!");
    }

    @Override
    public Client getClientEntityById(Long clientId) {
        return clientRepository.findById(clientId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Client not found: " +clientId)
                );
    }
}
